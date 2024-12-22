//5.
// Crear una función generarReporteLibros() 
//que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información://
//Cantidad total de libros.
//Cantidad de libros prestados.
//Cantidad de libros por género.
//Libro más antiguo y más nuevo.

const prompt = require('prompt-sync')()


    const libros = [
        { id: 1, titulo: 'Rayuela', autor: 'Julio Cortazar', anio: 1963, genero: 'Ficción Literaria', disponible: false },
        { id: 2, titulo: 'La biblioteca de Babel', autor: 'Jorge Luis Borges', anio: 1941, genero: 'Ficción Literaria', disponible: true },
        { id: 3, titulo: 'En las Montañas de la Locura', autor: 'Howard Phillips Lovecraft', anio: 1941, genero: ' Terror', disponible: true },
        { id: 4, titulo: 'Cuentos sin plumas', autor: 'Woody Allen', anio: 1988, genero: ' Humor', disponible: true },
        { id: 5, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes Saavedra', anio: 1615, genero: 'Novela', disponible: true },
        { id: 6, titulo: 'Las palabras calladas', autor: 'Pedro Miguel Lamet Moreno', anio: 2018, genero: 'Novela Histórica ', disponible: false },
        { id: 7, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', anio: 1967, genero: 'Realismo mágico', disponible: true },
        { id: 8, titulo: '1984', autor: 'George Orwell', anio: 1949, genero: 'Ciencia Ficción', disponible: false },
        { id: 9, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', anio: 1813, genero: 'Romance', disponible: true },
        { id: 10, titulo: 'Sapiens: De animales a dioses', autor: 'Yuval Noah Harari', anio: 2011, genero: 'No ficción', disponible: true }
    ];
    

//generar funcion :
function generarReporteLibros(libros, librosPrestados, genero, anio) {
    // cantidad total de libros
  const contandoLibros = libros.reduce(function (acum,libro) {
    return acum + 1 ; // Sumar 1 por cada libro en el array
    },0);
    console.log (contandoLibros);
}
// Llamar a la función para sumar libros
generarReporteLibros(libros);





