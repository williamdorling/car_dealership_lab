const { Accumulator } = require("bser");

const Dealership = function(name, maxNoOfCars){
    this.name = name,
    this.maxNoOfCars = maxNoOfCars;
    this.stock = [];
}
Dealership.prototype.countCarsInStock = function(){
    return this.stock.length;
}

Dealership.prototype.addCarToStock = function(car){
    this.stock.push(car);
}

Dealership.prototype.returnManufacturers = function(){
    return this.stock.map(car => car.manufacturer);
}

Dealership.prototype.findCarsFromManufacturer = function(manufacturer){
    return this.stock.filter(car => car.manufacturer === manufacturer);
}

Dealership.prototype.totalValueOfCarsInStock = function(){
    return this.stock.reduce((accumulator, car) => accumulator + car.price, 0)
}

module.exports = Dealership;