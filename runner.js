const Car = require('./car');
const Dealership = require('./dealership');
const Customer = require('./customer');

const dealership1 = new Dealership("CarsRUs", 20);
const dealership2 = new Dealership("Dealership2", 1);
const fordFocus = new Car("Ford", 20000, "petrol");
const renaultMegane = new Car("Renault", 15000, "diesel");
dealership2.addCarToStock(fordFocus);
dealership1.addCarToStock(fordFocus);
dealership1.addCarToStock(renaultMegane);

const customer1 = new Customer('Will', 17000);

console.log(customer1.canBuyCar(renaultMegane));
// customer1.buyCar(renaultMegane);
dealership1.sellCar(customer1, renaultMegane);
console.log(customer1.car);
console.log(customer1.wallet);
console.log(dealership1.stock);
