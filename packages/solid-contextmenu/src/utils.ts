import { BooleanPredicate, Pos, Size, ItemParams } from ".";

const calVal = (clickV: number, elV: number, innerV: number) => {
  if (clickV + elV <= innerV) {
    return clickV;
  }
  if (clickV < elV) {
    return 0;
  }
  return clickV - elV;
};
export const calPos = (clickPos: Pos, elSize: Size): Pos => {
  const pageSize: Size = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  return {
    x: calVal(clickPos.x, elSize.width, pageSize.width),
    y: calVal(clickPos.y, elSize.height, pageSize.height),
  };
};

export function isFn(v: any): v is Function {
  return typeof v === "function";
}

export function isStr(v: any): v is String {
  return typeof v === "string";
}

export function getPredicateValue(
  predicate: BooleanPredicate,
  payload: ItemParams
) {
  return isFn(predicate) ? predicate(payload) : predicate;
}
