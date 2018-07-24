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

// Using an interface!!! 
interface ingredientBasket {
    numberOfItems: number;
    ingredients: Array<string>;
    calories: number;
}

// Variable for the interface
const sandwichIngredients = {
    numberOfItems: 3,
    ingredients: ['bacon', 'lettuce', 'tomato'],
    calories?: number;      // The ? denotes that the calories are not a required parameter
};

// Function to use the interface and variable we just made
function makeASandwich(ingredients: ingredientBasket): void {
    console.log(
        'Beep boop, the ' + 
        ingredients.numberOfItems + 
        ' items passed in have been combined into a sandwich containing ' + 
        ingredients.calories + 
        ' calories'
    );
}

// Making a sandwich using the function, variable, and interface!
makeASandwich(sandwichIngredients);
