Напиши функцию `filterByProperty`, которая принимает массив объектов и имя свойства, а возвращает новый массив объектов, обладающих этим свойством. Тип свойства должен совпадать с типом, переданным в параметре, благодаря дженерикам.

Условия:

1. Функция должна иметь следующий тип:

Copy code
function filterByProperty<T, K extends keyof T>(array: T[], property: K, value: T[K]): T[]
T – это тип объектов в массиве.

K – это имя свойства, которое должно присутствовать в объектах массива.

value — значение, которое должно обладать этим свойством для того, чтобы объект был включен в результирующий массив.

Пример использования

Copy code
type User = {
id: number;
name: string;
age: number;
isActive: boolean;
};

const users: User[] = [
{ id: 1, name: 'Alice', age: 25, isActive: true },
{ id: 2, name: 'Bob', age: 30, isActive: false },
{ id: 3, name: 'Charlie', age: 35, isActive: true },
];
Использование функции

Copy code
const activeUsers = filterByProperty(users, 'isActive', true);
console.log(activeUsers);
// Результат: [
//   { id: 1, name: 'Alice', age: 25, isActive: true },
//   { id: 3, name: 'Charlie', age: 35, isActive: true }
// ]
```

Объяснение

- Функция `filterByProperty` использует дженерики `T` и `K`.

- `T` – тип элементов в массиве.

- `K extends keyof T` – позволяет использовать только те ключи, которые есть в типе `T`.

- `T[K]` – тип значения, которое мы сравниваем с переданным `value`.

Как это работает

- Функция ` filterByProperty` проверяет каждый объект в массиве, чтобы определить, имеет ли свойство `property` значение, равное `value`.

- Результат – новый массив, содержащий только объекты, соответствующие условиям.