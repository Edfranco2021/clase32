const { application } = require('express');
var express = require('express');
var router = express.Router();

//traigo todas las funciones de la api 
const api = require('../api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET /resultados page */
router.get('/resultados',async (req, res)=> {
  /*consegui lo que el usuario tipeo */
  const {titulo} =req.query;
  //console.log(req.query);
  //enviar titulo a la llamada de la API
  const results = await api.searchByTitle(titulo);
  res.send(results);
});

/*Get agregar page */
router.get('/agregar',async (req,res) => {
  const authors = await api.getAuthors();

  console.log(authors);
  res.render('pages/agregar');
});

/* GET nosotros page */
router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros', { title: 'Nosotros' });
});

/* GET contacto page */
router.get('/contacto', (req, res) => {
  res.render('pages/contacto', { title: 'Contacto' });
});

//http://localhost:3000/libros
router.get('/libros', async (req, res) => {
  //llamar a la funcion getBooks
  const books = await api.getBooks();
  //Devolver el JSON con los libros recibidos
  res.render('pages/libros', { books});
});

//http://localhost:3000/libro/5
router.get('/libro/:id', async (req,res) => {
  //console.log('la ruta trajo : '+ req.params.id);
  const book =await api.getBookById(req.params.id);
  
  //res.send('Hola vas bien!');
  //res.send(book);
  res.render('pages/libro', { book });
});



module.exports = router;