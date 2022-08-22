import { Accessor, JSX } from "solid-js";

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

export type MenuProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "id"> &
  LocalMenuProps;
type LocalMenuProps = {
  id: MenuId;
  children?: JSX.Element | JSX.Element[];
  theme?: "light" | "dark";
  animation?: string | false;
  onShown?: () => void;
  onHidden?: () => void;
};

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
type LocalItemProps = {
  children?: JSX.Element | JSX.Element[];
  data?: any;
  disabled?: BooleanPredicate;
  hidden?: BooleanPredicate;
  onClick?: (args: HandlerParams) => void;
};

export type ItemProps = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "hidden" | "disabled" | "onClick"
> &
  LocalItemProps;
