//Desarrollar un sistema de gestión para una biblioteca que permita administrar libros y usuarios, 
// aplicando los conceptos fundamentales de JavaScript vistos en el módulo.

//1.Estructura de Datos


const prompt = require('prompt-sync')()

const libros = [
    { id: 1, titulo: 'Rayuela', autor: 'Julio Cortazar', anio: 1963, genero: 'Ficción Literaria', disponible: false },
    { id: 2, titulo: 'La biblioteca de Babel', autor: 'Jorge Luis Borges', anio: 1941, genero: 'Ficción Literaria', disponible: true },
    { id: 3, titulo: 'En las Montañas de la Locura', autor: 'Howard Phillips Lovecraft', anio: 1941, genero: ' Terror', disponible: true },
    { id: 4, titulo: 'Cuentos sin plumas', autor: 'Woody Allen', anio: 1988, genero: ' Humor', disponible: true },
    { id: 6, titulo: 'Las palabras calladas', autor: 'Pedro Miguel Lamet Moreno', anio: 2018, genero: 'Novela Histórica ', disponible: false },
    { id: 7, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', anio: 1967, genero: 'Realismo mágico', disponible: true },
    { id: 8, titulo: '1984', autor: 'George Orwell', anio: 1949, genero: 'Distopía', disponible: false },
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

//2. Funciones de Gestión de Libros

function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = { id, titulo, autor, anio, genero };
    libros.push(nuevoLibro);
    console.log("Nuevo libro agregado:", nuevoLibro);
  }

//agregarLibro (11, "La casa de Bernarda Alba", "Federico García Lorca", 1945, "drama"); 
//console.log(libros);

function buscarLibro(criterio, valor) {
    for (let i = 0; i < libros.length; i++) {
        if (libros[i][criterio] === valor) {
            return libros[i]; // Devuelve el libro encontrado
        }
    }
    return "No se encontraron libros que coincidan con el criterio."; // Si no encuentra nada
}

//// Ejemplo de uso:
//console.log(buscarLibro("titulo", "1984")); // Buscar por título
//console.log(buscarLibro("autor", "Gabriel García Márquez")); // Buscar por autor
//console.log(buscarLibro("genero", "Distopía")); // Buscar por género
    
   
















