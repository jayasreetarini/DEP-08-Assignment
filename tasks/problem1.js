const products = [   
    { id: 1, name: "Widget", price: 50, quantity: 120 },   
    { id: 2, name: "Gadget", price: 30, quantity: 80 },   
    { id: 3, name: "Doohickey", price: 100, quantity: 200 },   
    { id: 4, name: "Thingamajig", price: 75, quantity: 90 } 
];

const updatedProductPrice = products.map((val) => {
    let newVal = { ...val };
    if (newVal.quantity > 100) {
        newVal.price = newVal.price - (10 / 100) * newVal.price;
    }
    return newVal;
});

console.log(updatedProductPrice);

const discountedProducts=updatedProductPrice.filter((val)=>{
    if(val.quantity>100)
        return val;
})
console.log(discountedProducts);

discountedProducts.forEach((val)=>{
    console.log(`${val.name} - ${val.price}`);
})