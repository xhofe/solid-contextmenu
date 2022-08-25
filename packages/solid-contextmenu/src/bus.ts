import mitt from "mitt";
import { ShowContextMenuParams, MenuId } from ".";

type Events = {
  show: ShowContextMenuParams;
  hideAll: void;
  hide: MenuId;
};

export const bus = mitt<Events>();
