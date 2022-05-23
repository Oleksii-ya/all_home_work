// протестуйте функції
// const arr = [{name: 'Alex'}, {name: 'Bob'}, {name: 'Pit'}]
// function getUserByName(name) { знайти та повернути юзера за його ім'ям}

// const arr = [{ name: "Alex" }, { name: "Bob" }, { name: "Pit" }];

function getUserByName(arr, name) {
  const user = arr.find((item) => {
    return item.name === name;
  });

  return user;
}

// const user = getUserByName("Alex");
// console.log(user);

module.exports = getUserByName;