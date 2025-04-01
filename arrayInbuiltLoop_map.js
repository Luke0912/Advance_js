const arr1 = [1, 2, 3, 4, 5];

let numberMap = arr1.map((e) => e * e);

// console.log("numberMap: ", numberMap);

// =================
const arr2 = [1, 2, 3, 4, 5];

const fun2 = (arr2) => {
  return arr2.map((e) => e * e);
};

// console.log("arr2", fun2(arr2));

// =================

const arr3 = [1, 2, 3, 4, 5];

const fun3 = (arr3) => {
  return arr3.map((e) => {
    console.log("e: ", e);
    return e * e;
  });
};

// console.log("arr3", fun3(arr3));

// =================

const arr4 = [1, 2, 3, 4, 5];

const fun4 = (arr4) => {
  let ret =  arr4.map((e) => {
    console.log('e: ', e);
    return e * e;
  });
  return ret
};

// console.log("arr4", fun4(arr4));