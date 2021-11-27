//traer la base de dato
const db = require('../models');

//SELECT * FROM libro, se guarda una funcion anonima guardado en una variable. 

const getBooks = async () => {
    //llamo a al base de datos
    const books = await db.libro.findAll({
        include : db.autor
    }).then(result => {
        return result;
    });
    return books;
}


const getBookById = async (id)=>{
    console.log('-*-*-*-*-*-**--*-**-*-');
    console.log('El Id que llego a /api es' + id);
    console.log('-*-*-*-*-*-**--*-**-*-');
    //SELECT * FROM libros WHERE id_libro =4
    const book =await db.libro.findByPk(id, {

    }).then(result => {
        return result;
    });

    return book;
}

//exportamos las funciones
module.exports = {
    getBooks,
    getBookById
} 