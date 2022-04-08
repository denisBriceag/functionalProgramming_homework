//1 Elaborate a Sort function that takes as a parameter an array of objects and sorts them by name/age
//[{name"name", age:10}, {name"name", age:12}]

const arr = [
  { name: "Denis", age: 23 },
  { name: "Alex", age: 34 },
  { name: "Boris", age: 65 },
  { name: "Xavi", age: 21 },
  { name: "Cornel", age: 50 },
];

//SortMe web-app :)
function sorting(array) {
  const copyArr = [...array];
  let alert = prompt(
    `Choose by which value you want to sort`,
    'Enter "name" or "age"'
  );
  if (alert.trim() === "name") {
    let alert1 = prompt(`In which order?`, '"asc" or "desc"');
    if (alert1.trim() === "asc") {
      copyArr.sort((a, b) => {
        if (a.name[0].toUpperCase() > b.name[0].toUpperCase()) {
          return 1;
        }
        if (a.name[0].toUpperCase() < b.name[0].toUpperCase()) {
          return -1;
        }
        return 0;
      });
      return copyArr;
    } else if (alert1.trim() === "desc") {
      copyArr.sort((a, b) => {
        if (a.name[0].toUpperCase() > b.name[0].toUpperCase()) {
          return -1;
        }
        if (a.name[0].toUpperCase() < b.name[0].toUpperCase()) {
          return 1;
        }
        return 0;
      });
      return copyArr;
    } else {
      sorting(copyArr);
    }
  } else if (alert.trim() === "age") {
    let alert2 = prompt(`In which order?`, '"asc" or "desc"');
    if (alert2.trim() === "asc") {
      copyArr.sort((a, b) => {
        return a.age - b.age;
      });
      return copyArr;
    } else if (alert2.trim() === "desc") {
      copyArr.sort((a, b) => {
        return b.age - a.age;
      });
      return copyArr;
    } else {
      sorting(copyArr);
    }
  } else {
    return "Invalid Value :(";
  }
  return copyArr;
}

console.log(sorting(arr));
