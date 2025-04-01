const arr1 = [1,2,3,4,5,6,7,8,9,10]

let marr = arr1.filter((v,i,a)=>v > 2)

// console.log('marr: ', marr);

// -----------------

const arr2 = [1,2,3,4,5,6,7,8,9,10]

let fun1 = (arr2) =>{
    let ret = arr2.filter((v)=>{
        return v > 7
    }).map((v)=>{
        return v * 2
    })
    return ret
}

console.log("fun1",fun1(arr2));