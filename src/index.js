'use strict'
const Store = require('./store.class')
// Creamos un nuevo almacén con id 1

const almacen = new Store(1)

// Antes deberás haber importado la 
// clase Store para poder usarla

// Añadimos los 4 objetos que nos piden
const prod1 = {
    name: 'TV Samsung MP45',
    price: 345.95,
    units: 3
}
const prod2 = {
    name: 'Ábaco de madera',
    price: 245.95,
    units: 3
}
const prod3 = {
    name: 'impresora Epson LX-455',
    price: 45.95,
    units: 3
}
const prod4 = {
    name: 'USB Kingston 16GB',
    price: 5.95,
    units: 45
}

try {
    almacen.addProduct(prod1)
    almacen.addProduct(prod2)
    almacen.addProduct(prod3)
    almacen.addProduct(prod4)
} catch (err) {
    console.log(err)
}
// Hacemos las 5 modificaciones
try{
    almacen.changeProduct({id: 1, price: 325.90, units: 8})
}catch(err) {
    console.log(err)
}
try{
    almacen.changeProductUnits(2,15)
}catch(err) {
    console.log(err)
}
try{
    almacen.changeProduct({id: 3, price: 55.90, units: -2})
}catch(err) {
    console.log(err)
}
try{
    almacen.changeProductUnits(1,-10)
}catch(err) {
    console.log(err)
}
try{
    almacen.changeProduct({id: 2, name: 'Ábaco de madera (nuevo modelo)'})
}catch(err) {
    console.log(err)
}
// Mostramos por consola todo lo que nos piden
console.log(almacen.toString())
almacen.orderByName()
console.log('LISTADO DEL ALMACÉN alfabético \n \n' + almacen)
// Eliminamos los 2 productos
try{
    almacen.delProduct(1)
}catch(err) {
    console.log(err)
}
try{
    almacen.delProduct(3)
}catch(err) {
    console.log(err)
}
// Mostramos por consola todo lo que nos piden
almacen.orderByUnits()
console.log('LISTADO DEL ALMACÉN por existencias \n \n' + almacen)
console.log('LISTADO DE PRODUCTOS CON POCAS EXISTENCIAS \n \n' + almacen.underStock(10))
