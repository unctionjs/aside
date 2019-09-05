import pipe from "@unction/pipe";
import {MapperFunctionType} from "./types";

export default function aside<A, B> (unctions: Array<MapperFunctionType<A, B>>) {
  return function asideUnctions (value: A): A {
    pipe(unctions)(value);

    return value;
  };
}
