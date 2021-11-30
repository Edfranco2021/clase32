const { Op } = require("sequelize");
//traer la base de dato
const db = require('../models');

//SELECT * FROM libro, se guarda una funcion anonima guardado en una variable. 

const getBooks = async () => {
    //llamo a al base de datos
    const books = await db.libro.findAll({
        include: db.autor
    }).then(result => {
        return result;
    });
    return books;
}


const getBookById = async (id) => {
    console.log('-*-*-*-*-*-**--*-**-*-');
    console.log('El Id que llego a /api es' + id);
    console.log('-*-*-*-*-*-**--*-**-*-');
    //SELECT * FROM libros WHERE id_libro =4
    const book = await db.libro.findByPk(id, {
        include: db.autor
    }).then(result => {
        return result;
    });

    return book;
}


const searchByTitle = async (titulo) => {
    // Op.substring toma una cadena y le agrega %
    //SELECT * FROM libros
    //where columna Operador valor 
    const results = await db.libro.findAll({
        where: {
            titulo:{
                [Op.substring]: titulo
            }            
        },
        include: db.autor
    }).then(result => {
        return result;
    });

    return results;
}

//exportamos las funciones
module.exports = {
    getBooks,
    getBookById,
    searchByTitle
}