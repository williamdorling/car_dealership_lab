const exp = require('constants');
const Car = require('./car');

const fordFocus = new Car("Ford", 20000, "petrol");

describe ('access functionality', () =>{

    test('can access manufacturer', () =>{
        const expected = "Ford";
        const actual = fordFocus.manufacturer;
        expect(actual).toBe(expected);
    })

    test('can access price', () => {
        const expected = 20000;
        const actual = fordFocus.price;
        expect(actual).toBe(expected);
    })

    test('can access engineType', () => {
        const expected = "petrol";
        const actual = fordFocus.engineType;
        expect(actual).toBe(expected);
    })

})