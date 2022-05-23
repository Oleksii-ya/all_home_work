const createArrayWithoutDuplicates = require("./createArrayWithoutDuplicates");

describe("check the new array for duplicate values", () => {
  const arr = [3, 8, 5];
  const secArr = [7, 8, 9];

  function uniqueNumbers(arrOne, arrTwo) {
    const arr = [...arrOne, ...arrTwo];
    const result = [];
    arr.forEach((element) => {
      if (!result.includes(element)) {
        result.push(element);
      }
    });
    return result;
  }

function checkNumbers(arr)

  test("check the new array for duplicate values", () => {
    expect(createArrayWithoutDuplicates(arr, secArr)).toEqual(
      Array.from(new Set([...arr, ...secArr]))
    );
  });
});

// "зробити та повернути новий масив без повторень значень"
// значення можуть розташовуватися в довільному порядку
// перевірка на лишні значення

// зібрати массив з унікальними значеннями,
// перевірити наявність кожного числа в результуючому масиві
// перевірити кількість елементів в результуючому масиві та з тим з яким зрівнюємо
