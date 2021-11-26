//traer la base de dato
const db = require('../models');

//SELECT * FROM libro, se guarda una funcion anonima guardado en una variable. 

const getBooks = async () => {
    //llamo a al base de datos
    const books = await db.libro.findAll().then(result => {
        return result;
    });
    return books;
}


//exportamos las funciones
module.exports = {
    getBooks
}