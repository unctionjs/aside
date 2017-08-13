import pipe from "@unction/pipe"

export default function aside (unctions: Array<mixed => mixed>): Function {
  const journey = pipe(unctions)

  return function asideUnctions (value: mixed): mixed {
    journey(value)

    return value
  }
}
