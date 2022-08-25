import {
  createMemo,
  createSignal,
  JSX,
  mergeProps,
  onCleanup,
  Show,
  splitProps,
} from "solid-js";
import { Portal } from "solid-js/web";
import { Transition } from "solid-transition-group";
import { bus } from "../bus";
import { MenuContext } from "../context";
import { STYLE, Pos, MenuId, Size } from "..";
import clsx from "clsx";
import "../scss/main.scss";

const calVal = (clickP: number, elS: number, boxS: number) => {
  if (clickP + elS <= boxS) {
    return clickP;
  }
  if (clickP < elS) {
    return boxS - elS;
    // return 0;
  }
  return clickP - elS;
};
const calPos = (clickPos: Pos, elSize: Size): Pos => {
  const pageSize: Size = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  return {
    x: calVal(clickPos.x, elSize.width, pageSize.width),
    y: calVal(clickPos.y, elSize.height, pageSize.height),
  };
};

export type LocalMenuProps = {
  id: MenuId;
  children?: JSX.Element;
  theme?: "light" | "dark";
  animation?: string | false;
  onShown?: () => void;
  onHidden?: () => void;
};

export type MenuProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "id"> &
  LocalMenuProps;

export const Menu = (props: MenuProps) => {
  const [local, others] = splitProps(props, [
    "id",
    "theme",
    "animation",
    "onShown",
    "onHidden",
  ]);
  const [shown, setShown] = createSignal(false);
  const [pos, setPos] = createSignal<Pos>({ x: 0, y: 0 });

  let el: HTMLDivElement;

  // store newest show props
  const [showProps, setShowProps] = createSignal<any>();

  bus.on("show", (params) => {
    if (params.id !== local.id) {
      return;
    }
    params.event.preventDefault();
    setShowProps(params.props);
    setShown(true);
    setPos(
      params.position ??
        calPos(
          {
            x: params.event.clientX,
            y: params.event.clientY,
          },
          {
            width: el.offsetWidth,
            height: el.offsetHeight,
          }
        )
    );
  });
  const hide = () => {
    bus.emit("hide", local.id);
    setShown(false);
  };
  const contextValue = mergeProps(
    {
      shown: shown,
      animation: "scale",
      hide: hide,
      props: showProps,
    },
    local
  );
  bus.on("hideAll", () => {
    hide();
  });

  onCleanup(() => {
    bus.off("show");
    bus.off("hideAll");
  });

  const animation = createMemo(() => {
    let ans = "";
    if (local.animation) {
      ans = `solid-contextmenu-${local.animation}`;
    }
    console.log(ans);
    return ans;
  });
  const animationClass = createMemo(() => {
    return {
      enterActiveClass: animation() + "-enter-active",
      exitActiveClass: animation() + "-exit-active",
    };
  });
  return (
    <MenuContext.Provider value={contextValue}>
      <Portal>
        <Transition {...animationClass()}>
          <Show when={shown()}>
            <div
              {...others}
              class={clsx(STYLE.menu, others.class, {
                [`${STYLE.theme}${local.theme}`]: local.theme,
              })}
              style={{
                left: pos().x + "px",
                top: pos().y + "px",
              }}
              // @ts-ignore
              use:clickOutside={hide()}
              ref={el!}
            />
          </Show>
        </Transition>
      </Portal>
    </MenuContext.Provider>
  );
};

// @ts-ignore
function clickOutside(el, accessor) {
  // @ts-ignore
  const onClick = (e) => !el.contains(e.target) && accessor()?.();
  document.body.addEventListener("click", onClick);

  onCleanup(() => document.body.removeEventListener("click", onClick));
}
