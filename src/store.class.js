const Product = require('./product.class');

class Store {
    constructor(id) {
        this.id = id
        this.products = []
    }

    findProduct(id) {
        return this.products.find(item => item.id === id)
    }

    addProduct(data) {
        if (!data.name) {
            throw 'El producto no tiene nombre'
        }
        if (!data.price) {
            throw 'El producto no tiene precio'
        }
        if (Math.sign(data.price) !== 1) {
            throw 'El precio del producto no es valido'
        }
        if (data.units) {
            if (Math.sign(data.units) !== 1) {
                throw 'Las unidades deben ser positivas'
            }
            if (!Number.isInteger(data.units)) {
                throw 'Las unidades deben ser numeros enteros'
            }
        }

        const newProd = new Product(
            this.maxId() + 1,
            data.name,
            data.price,
            data.units
        )

        this.products.push(newProd)

        return newProd
    }

    delProduct(id) {
        let product = this.findProduct(id)

        if (!product) {
            throw 'Este producto no existe'
        }
        if (product.units !== 0) {
            throw 'Todavia quedan unidades de este producto'
        }

        this.products.pop(product)

        return product
    }

    changeProduct(data) {
        let product = this.findProduct(data.id)

        if (!product) {
            throw 'No existe el producto'
        }
        if (data.name) {
            product.setName(data.name)
        }
        if (data.price || data.price == 0) {
            if (Math.sign(data.price) == -1 ) {
                throw 'El precio del producto no es valido'
            }
            if (isNaN(data.price)) {
                throw 'El precio del producto no es valido'
            }
            product.setPrice(data.price)
        }
        if (data.units) {
            if (Math.sign(data.units) < 0) {
                throw 'El precio del producto no es valido'
            }
            if (isNaN(data.units)) {
                throw 'El precio del producto no es valido'
            }
            if (!Number.isInteger(data.units)) {
                throw 'Las unidades deben ser numeros enteros'
            }
            product.setUnits(data.units)
        }

        return product
    }

    changeProductUnits(id,units) {
        let product = this.findProduct(id)
        
        if (!product) {
            throw 'No existe ese producto'
        }
        if (isNaN(units)) {
            throw 'El precio del producto no es valido'
        }
        if (!Number.isInteger(units)) {
            throw 'Las unidades deben ser numeros enteros'
        }
        
        product.changeUnits(units)
        
        return product
    }

    totalImport() {
        let total = 0
        this.products.forEach(product => {
            total += product.productImport()           
        })
        return total.toFixed(2)
    }

    underStock(units) {
        return this.products.filter(product => product.units < units)
    }

    orderByUnits() {
        return this.products.sort((product1,product2) => product2.units - product1.units)
    }

    orderByName() {
        return this.products.sort((product1,product2) => product1.name.localeCompare(product2.name))
    }

    maxId() {
        return this.products.reduce((max,item) => max > item.id ? max : item.id, 0)
    }

    toString() {
        let productos = ""
        this.products.forEach(product => {
            productos += "\n" + product
        });
        return "Almacén " + this.id + " => " + this.products.length + " productos: " + this.totalImport() + productos
                
    }
}

module.exports = Store