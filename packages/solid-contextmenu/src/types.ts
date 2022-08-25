import { Accessor } from "solid-js";
import { LocalMenuProps } from ".";

export type MenuId = string | number;

export interface Pos {
  x: number;
  y: number;
}
export interface Size {
  width: number;
  height: number;
}

export type TriggerEvent = MouseEvent;

export type ShowContextMenuParams = {
  id: MenuId;
  event: TriggerEvent;
  props?: any;
  position?: Pos;
};

export type MenuContextType = Omit<LocalMenuProps, "children"> & {
  shown: Accessor<boolean>;
  props: Accessor<any>;
  hide: () => void;
};

export interface ItemParams<Props = any, Data = any> {
  /**
   * Any props supplied when triggering the menu
   */
  props?: Props;

  /**
   * Data object provided to item
   */
  data?: Data;
}
export type HandlerParams<Props = any, Data = any> = ItemParams<Props, Data> & {
  event: MouseEvent;
};
export type BooleanPredicate = boolean | ((args: ItemParams) => boolean);
