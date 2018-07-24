const somethingFun: string = 'Riding my bike is fun!';
console.log(somethingFun);

const sandwich: string = 'BLT'; // string
const orderNumber: number = 1738; // number
const delicious: boolean = true; // boolean
console.log(sandwich);
console.log(orderNumber);
console.log(delicious);

function orderFood(sandwich: string, orderNumber: number): void {
    console.log('Your order number is ' + orderNumber + ' and constains a ' + sandwich + ' sandwich');
}

orderFood('Ham & Cheese', 32);

interface ingredientBasket {
    numberOfItems: number;
    ingredients: Array<string>;
    calories: number;
}