import { bus } from "../bus";
import { ShowContextMenuParams, TriggerEvent } from "..";

export type UseContextMenuProps = Partial<
  Pick<ShowContextMenuParams, "id" | "props">
>;

export const useContextMenu = (props?: UseContextMenuProps) => {
  return {
    show: (
      event: TriggerEvent,
      params?: Partial<Omit<ShowContextMenuParams, "event">>
    ) => {
      if (process.env.NODE_ENV === "development") {
        if (!props?.id && !params?.id)
          console.error(
            "You need to provide an id when initializing the hook `useContextMenu({ id: 'your id' })` or when you display the menu `show(e, { id: 'your id' })`. The later is used to override the one defined during initialization."
          );
      }
      bus.emit("show", {
        id: (params?.id || props?.id) as string,
        props: params?.props || props?.props,
        event: event,
        position: params?.position,
      });
    },
    hideAll: () => {
      bus.emit("hideAll");
    },
  };
};
