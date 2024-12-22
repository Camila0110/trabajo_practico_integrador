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
    
    let usuarios = [
        { id: 20, 
        nombre: 'Ramón', 
        email: 'ramonHu@gmail.com', 
        librosPrestados: [1, 5, 8, 10 ]
        },
        
        { id: 25, 
            nombre: 'Lara', 
            email: 'LaraGala@gmail.com',  
            librosPrestados: [2, 6, 7 ]
        },
    
        { id: 38, 
           nombre: 'Ramón', 
           email: 'ramonHu@gmail.com', 
           librosPrestados: [7, 8, 10 ]
        },
    
        { id: 40, 
            nombre: 'Hernán', 
            email: 'hernanGona@gmail.com', 
            librosPrestados: [2, 3, 9, 10 ]
         },
    
         { id: 43, 
            nombre: 'María', 
            email: 'mariajafe@gmail.com', 
            librosPrestados: [2, 5, 7, 8, 9]
         }
    ];


//generar funcion :
function generarReporteLibros(libros, librosPrestados, genero, anio) {
    // cantidad total de libros
  const contandoLibros = libros.reduce(function (acum,libro) {
    return acum + 1 ; // Sumar 1 por cada libro en el array
    },0);
    console.log("Cantidad total de libros:", contandoLibros);
    // Total de libros prestados (contando todos los libros prestados de todos los usuarios)
const contandoLibrosPrestados = usuarios.reduce(function (acum,usuario) {
        return acum + usuario.librosPrestados.length ; // Sumar la cantidad de libros prestados de cada usuario
        }, 0);
        console.log("Cantidad de libros prestados:", contandoLibrosPrestados);
}



// Llamar a la función para sumar libros y sumar librosPrestados
generarReporteLibros(libros, usuarios);






