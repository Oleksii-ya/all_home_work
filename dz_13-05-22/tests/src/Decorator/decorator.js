// 1) напишить декоратор:
// spy(func) який повинен повертати обертку, яка записує всі визови функції в своєму свойстві calls.
// Кожен визов повинен зберігатися як масив аргументів
// function sum(a, b) { return a + b}
// wrapper = spy(sum)
// wrapper(1, 2)
// wrapper(5, 7)
// wrapper.calls буде [[1,2], [5, 7]]

function spy(func) {
  function wrapper(a, b) {
    wrapper.calls.push([a, b]);
    return func(a, b);
  }
  wrapper.calls = [];

  return wrapper;
}

module.exports = spy;
