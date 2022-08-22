import {
  createSignal,
  mergeProps,
  onCleanup,
  Show,
  splitProps,
} from "solid-js";
import { Portal } from "solid-js/web";
import { Transition } from "solid-transition-group";
import { bus } from "../bus";
import { MenuContext } from "../context";
import { STYLE, MenuProps, Pos } from "..";
import { calPos } from "../utils";
import clsx from "clsx";
import "../scss/main.scss";

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

  const contextValue = mergeProps(
    {
      shown: shown,
      animation: "scale",
      hide: () => setShown(false),
      props: showProps,
    },
    local
  );
  bus.on("hideAll", () => {
    setShown(false);
  });

  onCleanup(() => {
    bus.off("show");
    bus.off("hideAll");
  });

  const animation = () => {
    if (!local.animation) {
      return "";
    }
    return `solid-contextmenu-${local.animation}`;
  };
  return (
    <MenuContext.Provider value={contextValue}>
      <Portal>
        <Transition name={animation()}>
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
              use:clickOutside={() => setShown(false)}
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
