const spy = require("./decorator");

describe("test the decorator property calls", () => {
  function sum(a, b) {
    return a + b;
  }
  const wrapper = spy(sum);
  test("we compare the property calls of the decorator with the arguments passed to this decorator", () => {
    wrapper(1, 2);
    wrapper(5, 7);
    expect(wrapper.calls).toEqual([
      [1, 2],
      [5, 7],
    ]);
  });
});
