const findObjectProperty = require("./findObjectProperty");

describe("test function of search of property in object", () => {
  const obj = {
    one: 111,
    two: 222,
    three: 333,
    four: function () {
      return "best test";
    },
  };

  test("pass the property that is in the object, must return the string 'Property is present in the object'", () => {
    expect(findObjectProperty("two", obj)).toBe(
      "Property is present in the object"
    );
  });
  test("pass property which is not present in object, must return the string 'Property is not present in the object'", () => {
    expect(findObjectProperty("five", obj)).toBe(
      "Property is not present in the object"
    );
  });
  test("the method passed as a property must return false", () => {
    expect(findObjectProperty("four", obj)).not.toBe(
      "Property is present in the object"
    );
  });
  test("the transmission of any type of data other than a string or Symbol should return an error", () => {
    expect(() => {
      findObjectProperty([555], obj);
    }).toThrow(Error);
  });
});

// function findObjectProperty(prop, obj) {
//   if (obj[prop]) {
//     return "Property is present in the object";
//   }

//   return "Property is not present in the object";
// }
