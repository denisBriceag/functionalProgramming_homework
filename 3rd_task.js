//3. Object deep clone

const obj = {
  name: "Denis",
  age: 23,
  siblings: {
    father: {
      name: "Cornel",
      age: 49,
    },
    mother: {
      name: "Natalia",
      age: 50,
    },
  },
  walk() {
    console.log("can walk");
  },
};

const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let coppiedObj = null;
  if (!Array.isArray(obj)) {
    coppiedObj = {};
  } else {
    coppiedObj = [];
  }

  let val = null;
  for (let key in obj) {
    val = obj[key];
    coppiedObj[key] = deepClone(val);
  }
  return coppiedObj;
};

const obj1 = deepClone(obj);

obj1.siblings.mother.name = "Natasha";

console.log(obj); //Expected output: siblings.mother.name = "Natalia"
console.log(obj1); //Expected output: siblings.mother.name = "Natasha"

//2nd Variant
//This method does deep copy of an object. But if we put a method inside the original object, JSON.parse() method wont see it.

function deepClone(object) {
  if (object === null) return null;
  let temp = JSON.stringify(object); //string
  console.log(temp);
  const objCopy = JSON.parse(temp); //object
  return objCopy;
}
