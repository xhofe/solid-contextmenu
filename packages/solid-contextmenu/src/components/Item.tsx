import clsx from "clsx";
import { createMemo, mergeProps, Show, splitProps } from "solid-js";
import { ItemProps, STYLE } from "..";
import { useMenu } from "../context";
import { getPredicateValue } from "../utils";

export const Item = (props: ItemProps) => {
  const [local, others] = splitProps(props, [
    "hidden",
    "disabled",
    "onClick",
    "data",
    "children",
  ]);
  const merged = mergeProps(
    {
      hidden: false,
      disabled: false,
    },
    local
  );
  const { props: showProps, hide } = useMenu();
  const handlerParams = createMemo(() => ({
    props: showProps(),
    data: props.data,
  }));
  const isDisabled = createMemo(() =>
    getPredicateValue(merged.disabled, handlerParams())
  );
  const isHidden = createMemo(() =>
    getPredicateValue(merged.hidden, handlerParams())
  );
  const handleClick = (e: MouseEvent) => {
    if (isDisabled()) {
      return;
    }
    props.onClick?.({
      event: e,
      ...handlerParams(),
    });
    hide();
  };
  return (
    <Show when={!isHidden()}>
      <div {...others} class={clsx(STYLE.item)} onClick={handleClick}>
        <div class={STYLE.itemContent}>{local.children}</div>
      </div>
    </Show>
  );
};
