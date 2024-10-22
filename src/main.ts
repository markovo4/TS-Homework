type Product = {
    name: string,
    price: number,
    available: boolean,
}

const fruit: Product = {
    name: 'Pineapple',
    price: 69,
    available: true,
}

const productInfo = function(obj:Product):string{
    return (`Product name: ${obj.name} 
Product price: ${obj.price}
Is available: ${obj.available}`)
}

console.log(productInfo(fruit))