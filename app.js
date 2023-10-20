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
