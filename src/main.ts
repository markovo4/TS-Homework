//Task-1

// interface Address {
//     street: string,
//     city: string,
//     zipCode: string,
// }
//
// interface User {
//     name: string,
//     age: number,
// }
//
// interface UserWithAddress extends Address, User{
//     email: string,
// }
//
// const user: UserWithAddress = {
//     name: 'string',
//     age: 21,
//     street: 'string',
//     city: 'string',
//     zipCode: 'string',
//     email: 'string',
// }

//Task-2

// type Category = {
//     categoryName: string,
//     categoryId: number,
// }
//
// interface Product{
//     name: string,
//     price: number,
//     category: Category
// }
//
// interface Order{
//     orderId: number,
//     userId: number,
//     products: Array<Product>
// }
//
//
// const banana: Order = {
//     orderId: 1,
//     userId: 1,
//     products: [
//         {
//             name: 'string',
//             price: 20,
//             category: {
//                 categoryName: 'string',
//                 categoryId: 1,
//             }
//         }, {
//             name: 'string',
//             price: 20,
//             category: {
//                 categoryName: 'string',
//                 categoryId: 1,
//             }
//         },
//         {
//             name: 'string',
//             price: 20,
//             category: {
//                 categoryName: 'string',
//                 categoryId: 1,
//             }
//
//         }
//         ]
// }
// console.log(banana)

//Task-3

// interface Person{
//     firstName: string,
//     lastName: string,
//     middleName?: string,
// }
//
// const getString = function (object: Person):string{
//     return `${object.firstName}, ${object.lastName}, ${object.middleName ?? ''}`
// }
//
// const vlad: Person = {
//     firstName: 'VLAD',
//     lastName: 'string',
//     middleName: 'string',
// }
//
// console.log(getString(vlad));


//Task-4

type AutoSave ={
    enabled: boolean,
    interval: number
}

interface Settings {
    theme: 'light' | 'dark',
    notifications: boolean,
    autoSave: AutoSave
}

const body = document.getElementById('app');
const button = document.createElement('button');


button.setAttribute('data-note', 'enabled')
let attribute = button.getAttribute('data-note')
button.textContent = `${attribute} Notifications`;


body.appendChild(button)

const settings:Settings={
    theme: 'light',
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 1
    }
}

const applySettings = function (object:Settings):void{
    if (button.getAttribute('data-note') === 'enabled'){
        alert('Notifications were disabled from now on!')
        button.setAttribute('data-note', 'disabled')
        button.textContent = `${button.getAttribute('data-note')} Notifications`;
        object.notifications = false;
    } else if(button.getAttribute('data-note') === 'disabled'){
        button.setAttribute('data-note', 'enabled')
        button.textContent = `${button.getAttribute('data-note')} Notifications`;
        object.notifications = true;
    }
}

button.addEventListener('click', ()=>{
    applySettings(settings)
})

