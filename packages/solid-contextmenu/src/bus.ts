import mitt from "mitt";
import { ShowContextMenuParams } from ".";

type Events = {
  show: ShowContextMenuParams;
  hideAll: void;
};

export const bus = mitt<Events>();
