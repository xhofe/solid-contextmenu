import clsx from "clsx";
import {
  createMemo,
  createSignal,
  JSX,
  mergeProps,
  onCleanup,
  Show,
  splitProps,
} from "solid-js";
import { useMenu } from "../context";
import { STYLE, BooleanPredicate, Pos, Size } from "..";
import { getPredicateValue } from "../utils";
import { bus } from "../bus";

export interface LocalSubMenuProps {
  label: JSX.Element;
  children: JSX.Element;
  arrow?: JSX.Element;
  disabled?: BooleanPredicate;
  hidden?: BooleanPredicate;
}
export type SubMenuProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "hidden"> &
  LocalSubMenuProps;
export const Submenu = (props: SubMenuProps) => {
  const [local, others] = splitProps(props, [
    "arrow",
    "children",
    "disabled",
    "hidden",
    "label",
    "class",
  ]);
  const merged = mergeProps(
    {
      arrow: "▶️",
      disabled: false,
      hidden: false,
    },
    local
  );
  const { props: showProps, id: menuId } = useMenu();
  const handlerParams = createMemo(() => ({
    props: showProps(),
  }));
  const isDisabled = createMemo(() =>
    getPredicateValue(merged.disabled, handlerParams())
  );
  const isHidden = createMemo(() =>
    getPredicateValue(merged.hidden, handlerParams())
  );
  let parent: HTMLDivElement;
  let sub: HTMLDivElement;
  const [pos, setPos] = createSignal<Pos>({ x: 0, y: 0 });
  const updatePos = () => {
    const parentRect = parent.getBoundingClientRect();
    const subRect = sub.getBoundingClientRect();
    const windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    let x = parentRect.right;
    if (x + subRect.width > windowSize.width) {
      if (parentRect.left - subRect.width > 0) {
        x = parentRect.left - subRect.width;
      } else {
        x = windowSize.width - subRect.width;
      }
    }
    let y = parentRect.top;
    if (y + subRect.height > windowSize.height) {
      if (parentRect.bottom - subRect.height > 0) {
        y = parentRect.bottom - subRect.height;
      } else {
        y = windowSize.height - subRect.height;
      }
    }
    setPos({ x, y });
    console.log(pos());
  };
  const [shown, setShown] = createSignal(false);
  const show = () => {
    setShown(true);
    updatePos();
  };
  bus.on("hide", (id) => {
    if (id === menuId) {
      setShown(false);
    }
  });
  onCleanup(() => {
    bus.off("hide");
  });
  return (
    <Show when={!isHidden()}>
      <div
        {...others}
        class={clsx(STYLE.item, local.class, {
          [STYLE.itemDisabled]: isDisabled(),
        })}
        onMouseEnter={() => show()}
        onMouseLeave={() => setShown(false)}
        onClick={() => (shown() ? setShown(false) : show())}
      >
        <div class={STYLE.itemContent} ref={parent!}>
          {merged.label}
          <span class={STYLE.submenuArrow}>{merged.arrow}</span>
        </div>
        <Show when={shown()}>
          <div
            ref={sub!}
            class={STYLE.submenu}
            style={{
              left: pos().x + "px",
              top: pos().y + "px",
            }}
          >
            {merged.children}
          </div>
        </Show>
      </div>
    </Show>
  );
};
