const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 5 },
    { id: 2, name: "Phone", category: "Electronics", price: 500, stock: 10 },
    { id: 3, name: "Tablet", category: "Electronics", price: 700, stock: 0 },
    { id: 4, name: "Shoes", category: "Fashion", price: 200, stock: 20 },
    { id: 5, name: "Jeans", category: "Fashion", price: 100, stock: 15 },
    { id: 6, name: "T-shirt", category: "Fashion", price: 50, stock: 25 },
    { id: 7, name: "Watch", category: "Accessories", price: 300, stock: 8 },
    { id: 8, name: "Headphones", category: "Electronics", price: 150, stock: 12 },
    { id: 9, name: "Backpack", category: "Accessories", price: 80, stock: 6 },
    { id: 10, name: "Smartwatch", category: "Electronics", price: 250, stock: 7 }
];


// ==============================================MAP==============================================

// Q1.Create an array of product names.

const q1 = (products) =>{
    return products.map((product)=>product.name)
} 
// console.log('q1: ', q1(products));

// Q2.Generate a new array of objects that includes product names and their 
// respective prices but removes other properties.

const q2 = (products) => {
    return products.map((product)=>{
        return {"name":product.name,"price":product.price}
    })
}
// console.log('q2: ', q2(products));

// Q3.Convert the product prices to a different currency by
//  multiplying each price by 85 (assuming INR conversion).

const q3 = (products) =>{
    return products.map((product) => {
        return {...product,price:product.price * 85}
    })
}
// console.log('q3: ', q3(products));

// Q4.Create an array of formatted strings like "Product: Laptop, Price: $1000".

const q4 = (products) =>{
    return products.map((product)=>`Product: ${product.name}, Price: $${product.price}`)
}
// console.log('q4: ', q4(products));

// Q5.Increase the stock of each product by 5 units.

const q5 = (products) =>{
    return products.map((product)=>{
        return {...product,stock:product.stock+5}
    })
}
// console.log('q5: ', q5(products));

// ==============================================FILTER==============================================

// Q6.Get an array of all products that are in stock.

const q6 = (products) => {
    return products.filter((product)=>product.stock > 0)
}
// console.log('q6: ', q6(products));

// Q7.Find all products that belong to the "Electronics" category.

const q7 = (products) => {
    return products.filter((product)=>product.category === "Electronics")
}
// console.log('q7: ', q7(products));

