const Dealership = require('./dealership');
const Car = require('./car');
const Customer = require('./customer');

const dealership1 = new Dealership("CarsRUs", 20);
const dealership2 = new Dealership("Dealership2", 1);
const fordFocus = new Car("Ford", 20000, "petrol");
const renaultMegane = new Car("Renault", 15000, "diesel");
dealership2.addCarToStock(fordFocus);

const customer1 = new Customer('Will', 17000);

describe ('access functionality', () =>{

    test('can access name', () =>{
        const expected = "CarsRUs";
        const actual = dealership1.name;
        expect(actual).toBe(expected);
    })

    test('can access capacity', () => {
        const expected = 20;
        const actual = dealership1.maxNoOfCars;
        expect(actual).toBe(expected);
    })

    test('stock starts at zero', () => {
        const expected = 0;
        const actual = dealership1.stock.length;
        expect(actual).toBe(expected);
    })
})

describe ('method functionality', () => {

    test ('can add a car to stock', () => {
        dealership1.addCarToStock(fordFocus);
        const expected = 1;
        const actual = dealership1.countCarsInStock();
        expect(actual).toBe(expected);
    })

    test ('cannot add car to stock if at capacity',() => {
        dealership2.addCarToStock(renaultMegane);
        const expected = 1;
        const actual = dealership2.countCarsInStock();
        expect(actual).toBe(expected);
    })

    test ('can find manufacturers', () => {
        dealership1.addCarToStock(renaultMegane);
        const expected = ['Ford', 'Renault'];
        const actual = dealership1.returnManufacturers();
        expect(actual).toStrictEqual(expected);
    })

    test ('can find cars by manufacturer', () => {
        const expected = 1;
        const actual = dealership1.findCarsFromManufacturer("Ford").length;
        expect(actual).toBe(expected);
    })

    test ('can find total value of stock', () => {
        const expected = 35000;
        const actual = dealership1.totalValueOfCarsInStock();
        expect(actual).toBe(expected);
    })

    test ('can sell car', () => {
        dealership1.sellCar(customer1, renaultMegane);
        const expected = 1;
        const actual = dealership1.countCarsInStock();
        expect(actual).toBe(expected);
    })

    test ('cannot sell car if customer does not have enough money', () => {
        dealership1.sellCar(customer1, fordFocus);
        const expected = 1;
        const actual = dealership1.countCarsInStock();
        expect(actual).toBe(expected);
    })

})