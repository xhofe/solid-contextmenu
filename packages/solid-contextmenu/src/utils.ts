import { BooleanPredicate, ItemParams } from ".";

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
