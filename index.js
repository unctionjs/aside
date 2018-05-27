import pipe from "@unction/pipe";
export default function aside(unctions) {
  const journey = pipe(unctions);
  return function asideUnctions(value) {
    journey(value);
    return value;
  };
}
