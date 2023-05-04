const Customer = function(name, wallet){
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}

module.exports = Customer;

Customer.prototype.canBuyCar = function(car){
    return car.price <= this.wallet;
}

Customer.prototype.buyCar = function(car){
    if (car.price <= this.wallet){
    this.car = car;
    this.wallet -= car.price;
    }
}