
import {spy} from "sinon";

import aside from "./index";

test("works", () => {
  const unction = spy(() => "b");

  expect(aside([unction])("a")).toBe("a");
});

test("works", () => {
  const unction = spy(() => "b");

  aside([unction])("a");

  expect(unction.calledWith("a")).toBeTruthy();
});

test("works", () => {
  const unction = spy(() => "b");

  expect(aside([unction])("a")).toBe("a");
});

test("works", () => {
  const unctionA = spy(() => "b");
  const unctionB = spy(() => "c");

  expect(aside([unctionA, unctionB])("a")).toBe("a");

  expect(unctionA.calledWith("a")).toBeTruthy();
  expect(unctionB.calledWith("b")).toBeTruthy();
});
