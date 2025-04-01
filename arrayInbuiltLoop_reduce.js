const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

let red = arr1.reduce((prev,curr)=>prev+curr,0)

// console.log('red: ', red);

// ---------------

const arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const fun1 = (arr2) =>{
    let reduced = arr2.reduce((prev,curr)=>{
        console.log('curr: ', prev,curr);
        return prev*curr
    },1)
    return reduced
}
// console.log('fun1: ', fun1(arr2));

// -------------------

const arr3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const fun2 = (arr3) => {
    return arr3.reduce((prev,curr)=>{
        return prev+curr 
    },0)
}
// console.log('fun2: ', fun2(arr3));

// ----------------------

const arr4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const fun3 = (arr4) => {
    return arr4.reduce((prev,curr)=>prev+curr,0)
}
// console.log('fun3: ', fun3(arr4));
