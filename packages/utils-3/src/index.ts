import { sub } from "@my-monorepo/utils";
import { sum } from "@my-monorepo/utils-2";

console.log("utils-3");

export const sumAndSub = (a: number, b: number, c: number, d: number) => {
  return sum(a, b) + sub(c, d);
};

console.log("result:", sumAndSub(1, 2, 6, 3));
