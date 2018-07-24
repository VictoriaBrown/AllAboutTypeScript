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
    readonly numberOfItems: number;     // readonly makes numberOfItems not editable after creation of this interface
    ingredients: Array<string>;
    calories?: number;      // The ? denotes that the calories are not a required parameter    
}

// Variable for the interface
const sandwichIngredients = {
    numberOfItems: number;
    ingredients: ['bacon', 'lettuce', 'tomato'],
    calories: number;      
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


// Below is an example of using an interface to enforce the structure of a class: 
interface Lifespan {
    currentTime: Date;
    printDate(): void;      // Ensures that the printDate() method doesn't return anything in the class
}

class AppointmentDateFormatter implements Lifespan {
    // notice that the constructor doesn't have return type annotation
    constructor(day: number, month: number, year: number) {
        this.currentTime = new Date(year, month, day);
    }

    currentTime: Date;

    printDate(): void {
        console.log(this.currentTime.toDateString());
    }
}

const dateOfAppointment = new AppointmentDateFormatter(12, 4, 2018);

dateOfAppointment.printDate();
