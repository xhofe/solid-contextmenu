import { createSignal } from "solid-js";
export const add = (a: number, b: number) => {
  return a + b;
};

export const Counter = () => {
  const [count, setCount] = createSignal(0);
  return <button onClick={() => setCount(count() + 1)}>{count()}</button>;
};
