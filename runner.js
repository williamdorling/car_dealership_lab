const Car = require('./car');
const Dealership = require('./dealership');

const fordFocus = new Car("Ford", 20000, "petrol");
const dealership1 = new Dealership("CarsRUs", 20);
dealership1.addCarToStock(fordFocus);


console.log(dealership1.stock);

const stock = dealership1.stock;
manufacturers = stock.map(car => car.manufacturer);

// console.log(fordFocus.manufacturer);

// for (car of stock){
//     console.log(car.manufacturer);
// }

console.log(manufacturers);

// console.log(dealership1.returnManufacturers());