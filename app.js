function doubleValues(array) {
  return array.map(function (number) {
    return number * 2;
  });
}

function onlyEvenValues(array) {
  return array.filter(function (value) {
    return value % 2 == 0;
  });
}

// i realized here that they wanted us to use forEach for the first five problems ¯\_(ツ)_/¯

function showFirstAndLast(array) {
  const newArray = [];
  array.forEach((element) => {
    let newElement = element[0] + element[element.length - 1];
    newArray.push(newElement);
  });
  return newArray;
}

function addKeyAndValue(arrayOfObjects, newkey, value) {
  arrayOfObjects.forEach(function (object) {
    object[newkey] = value;
  });

  return arrayOfObjects;
}

function vowelCount(string) {
  const newObject = {};
  const stringToArray = string.split("");
  stringToArray.forEach(function (value) {
    if (value.isVowel()) {
      if (newObject[value]) {
        newObject[value]++;
      } else {
        newObject[value] = 1;
      }
    }
  });
  return newObject;
}

function isVowel(char) {
  return "aeiou".includes(char);
}

// now here's where the map section is supposed to have gone :)
function doubleValuesWithMap(array) {
  const newArray = array.map(function (value) {
    return value * 2;
  });
  return newArray;
}

function valTimesIndex(array) {
  return array.map(function (value, index) {
    return value * index;
  });
}

function extractKey(arrayOfObjects, key) {
  return arrayOfObjects.map(function (object) {
    return object[key];
  });
}

function extractFullName(arrayOfObjects) {
  return arrayOfObjects.map(function (object) {
    return object["first"] + " " + object["last"];
  });
}

///
///
//filter section

function filterByValue(arrayOfObjects, key) {
  return arrayOfObjects.filter(function (object) {
    return object.hasOwnProperty(key);
  });
}

function find(array, value) {
  const tempArray = array.filter(function (element) {
    return element == value;
  });
  return tempArray[0];
}

function findInObj(arrayOfObjects, key, value) {
  tempArray = arrayOfObjects.filter(function (object) {
    return object[key] === value;
  });
  return tempArray[0];
}

function removeVowels(string) {
  return string
    .toLowerCase()
    .split("")
    .filter(function (char) {
      return "aeiou".indexOf(char) === -1;
    })
    .join("");
}

function doubleOddNumbers(array) {
  return array
    .filter(function (value) {
      return value % 2 == 1;
    })
    .map(function (value) {
      return value * 2;
    });
}

///
///
// some and every function practice

function hasOddNumber(array) {
  return array.some(function (number) {
    return number % 2 === 0;
  });
}

function hasAZero(number) {
  return number
    .toString()
    .split("")
    .some(function (digit) {
      return digit === 0;
    });
}

function hasNoDuplicates(array) {
  return array.every(function (element) {
    return array.indexOf(element) === array.lastIndexOf(element);
  });
}

function hasCertainKey(arrayOfObjects, key) {
  return arrayOfObjects.every(function (object) {
    return object.hasOwnProperty(key);
  });
}

function hasCertainValue(arrayOfObjects, key, value) {
  return arrayOfObjects.every(function (object) {
    return object[key] === value;
  });
}

///
///
// find and findIndex Exercise

function findUserByUserName(arrayOfObjects, name) {
  return arrayOfObjects.find(function (user) {
    return user[username] === name;
  });
}

function removeUser(arrayOfObjects, name) {
  const userIndex = arrayOfObjects.findIndex(function (user) {
    return user["username"] === name;
  });

  if (userIndex !== -1) {
    return arrayOfObjects.splice(userIndex, 1);
  }
  return;
}

///
///
// reduce exercise :)

function extractValue(arrayOfObjects, key) {
  return arrayOfObjects.reduce(function (accumulatedArray, currentObject) {
    if (currentObject.hasOwnProperty(key)) {
      accumulatedArray.push(currentObject[key]);
    }
    return accumulatedArray;
  }, []);
}

function vowelCount2(string) {
  newString = string.split("");
  return newString.reduce(function (accumulatedObject, letter) {
    if ("aeiou".indexOf(letter.toLowerCase()) !== -1) {
      if (letter in accumulatedObject) {
        accumulatedObject[letter]++;
      } else {
        accumulatedObject[letter] = 1;
      }
    }
    return accumulatedObject;
  }, {});
}

function addKeyAndValue2(arrayOfObjects, key, value) {
  return arrayOfObjects.reduce(function (accumulatedArray, currentObject) {
    currentObject[key] = value;
    accumulatedArray.push(currentObject);
    return accumulatedArray;
  }, []);
}

function partition(array, callback) {
  return array.reduce(
    function (accumulatedArray, currentElement) {
      if (callback(currentElement)) {
        accumulatedArray[0].push(currentElement);
      } else {
        accumulatedArray[1].push(currentElement);
      }
      return accumulatedArray;
    },
    [[], []]
  );
}

///
// let and const exercise
// ---------------------------------------------------
// -use const PI = 3.15 in the ES2015 version
// -var is a global handler, let is at the block level
// -var is a global handler, and const, like let, is at the block level
// -let lets you ressign the value of the variable (not redeclare it), but const does not
// -hoisting is the way the compiler(i think...) arranges the variable declarations

///
// arrow functions exercise
// ---------------------------------------------------
const double = (arr) => arr.map((val) => val * 2);

const squareAndFindEvens = (numbers) => {
  var squares = numbers.map((num) => num ** 2);
  var evens = squares.filter((square) => square % 2 === 0);
  return evens;
};

// it's  impressive how this can be even shorter. i think it may be jarring to see for people coming from other languages

///
// Rest / Spread Operator Exercises
// ---------------------------------------------------

const filterOutOdds = (...elements) => elements.filter((num) => num % 2 === 0);
// i like arrow functions, but i don't like the denseness the one-liners bring.

const findMin = (...elements) =>
  elements.reduce((min, currentVal) => Math.min(min, currentVal));

function mergeObjects(obj, obj2) {
  return { ...obj, ...obj2 };
}

const doubleAndReturnArgs = (array, ...numbers) => [
  ...array,
  ...numbers.map((value) => value * 2),
];

///
//  Object Enhancements Exercises
// ---------------------------------------------------
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

let favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

const instructor2 = {
  firstName: "Colt",
  sayHi() {
    "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise.toUpperCase();
    },
  };
}

///
//  Destructuring Exercise
// ---------------------------------------------------
// 1
// 8, 1846

// 2
// [1846, 1659]

// 3
// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

// array - 1
// Maya
// Marisa
// Chi

// array - 2
// Raindrops on roses
// whiskers on kittens
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// array - 3
// [ 10, 30, 20 ]

// es 2015 refactoring
// const obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };

//   let {numbers: {a}} = obj;
//   let {numbers: {b}} = obj;

// es2015 one line array swap with destructuring

// const arr = [1, 2];
// [arr[1],arr[0]] = [arr[0],arr[1]]

// raceResults function
function raceResults([first, second, third, ...rest]) {
  return {
    first,
    second,
    third,
    rest,
  };
}

///
//  Maps and Sets Exercise
// ---------------------------------------------------
// 1.
[1, 2, 3, 4];

2;
("ref");

3;
m = ([1, 2, 3], false);

function hasDuplicate(array) {
  let shortenedArray = new Set(array);
  return array.length > shortenedArray.size;
}

function vowelCount3(string) {
  let stringMap = new Map();
  for (char of string) {
    if ("aeiou".indexOf(char) !== -1) {
      if (stringMap.has(char)) {
        let currentValue = stringMap.get(char);
        stringMap.set(char, currentValue + 1);
      } else {
        stringMap.set(char, 1);
      }
    }
  }
  return stringMap;
}
