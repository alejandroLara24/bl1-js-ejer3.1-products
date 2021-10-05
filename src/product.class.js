class Product {
    
    constructor(id, name, price, units = 0) {
        this.id = id
        this.name = name
        this.price = price
        this.units = units
    }

    setName(name) {
        this.name = name
    }

    setPrice(price) {
        this.price = price
    }

    setUnits(units) {
        this.units = units
    }


    changeUnits(unidades) {
        if (this.units + unidades < 0) {
            throw 'Error, no puedes restar ' + unidades + ' unidades porque solo tienes ' + this.units
        }
        this.units += unidades
        return this        
    }

    productImport() {
        return this.units * this.price
    }

    toString() {
        return this.name + ": " + this.units + " uds. " + "x " + this.price + " €/u = " + this.productImport() + " €"
    }
}

module.exports = Product;
