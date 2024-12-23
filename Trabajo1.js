//Desarrollar un sistema de gestión para una biblioteca que permita administrar libros y usuarios, 
// aplicando los conceptos fundamentales de JavaScript vistos en el módulo.

//1.Estructura de Datos


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

//2. Funciones de Gestión de Libros

//Agregar Libros
function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = { id, titulo, autor, anio, genero };
    libros.push(nuevoLibro);
    console.log("Nuevo libro agregado:", nuevoLibro);
  }

agregarLibro (11, "La casa de Bernarda Alba", "Federico García Lorca", 1945, "drama"); 
console.log(`Asi queda la lista de Libros:`, libros);

//Buscar Libros:
function  buscarLibro(criterio, valor) {
    for (let i = 0; i < libros.length; i++) {
        if (libros[i][criterio] === valor) {
            return libros[i]; // Devuelve el libro encontrado
        }
    }
    return "No se encontraron libros que coincidan con el criterio."; // Si no encuentra nada
}

//// Ejemplo de uso:
console.log(`Este es el libro encontrado por título:` , buscarLibro("titulo", "1984")); // Buscar por título
//console.log(buscarLibro("autor", "Gabriel García Márquez")); // Buscar por autor
//console.log(buscarLibro("genero", "Ciencia Ficción")); // Buscar por género
   
//Ordenar libros según anios:

function ordenarLibrosPorAnio(libros){
    // Algoritmo de burbuja para ordenar el array 'libros' según la propiedad 'anio'
    for (let i = 0; i < libros.length; i++) {
        for (let j=0; j< libros.length - 1; j++){
            // Compara los valores de la propiedad 'anio' de los objetos
            if(libros[j].anio> libros[j+1].anio){
            // Si el año de 'libros[j]' es mayor que el de 'libros[j + 1]', intercambiamos los objetos completos
            let temp = libros[j];
            libros[j]=libros[j+1];
            libros[j+1]=temp;
        }
    }
}
}

// Llamada a la función para ordenar los libros por año
ordenarLibrosPorAnio(libros);
// Mostrar el resultado en consola
console.log(`Esta es la lista ordenada por años:` , libros);

//Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro. O sea: crear una función que pueda buscar un 
// libro específico dentro de un conjunto (en este caso, un array de libros) y luego eliminarlo si lo encuentra.

function borrarLibroPorId(id) {
    // Filtra todos los libros cuyo id no sea igual al id pasado como parámetro
  const nuevaListaLibros = libros.filter(function(libro) {
    return  libro.id !== id;
  });
  console.log(`El libro con ID ${id} ha sido eliminado. Esta es la nueva lista de libros:`, nuevaListaLibros);
}
// Llamar a la función para borrar un libro por su ID
borrarLibroPorId(4);

//3. Gestión de Usuarios

//Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

//Agregar Usuario
function agregarUsuario(id, nombre, email, librosPrestados) {
    const nuevoUsuario = { id, nombre, email, librosPrestados };
    usuarios.push(nuevoUsuario);
    console.log("Nuevo usuario agregado:", nuevoUsuario);
  }

agregarUsuario (47, "Alex", "alexha@gmail.com", [3, 5, 9]); 

//Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios.
mostrarTodosLosUsuarios = usuarios.map(function(usuarios){
    return(usuarios);
});
console.log(`Asi queda la lista de usuarios:`, usuarios);

//Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
function  buscarUsuario(criterio, valor) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i][criterio] === valor) {
            return usuarios[i]; // Devuelve el libro encontrado
        }
    }
    return "No se encontraron usuarios que coincidan con esa búsqueda."; // Si no encuentra nada
};

//// Ejemplo de uso:
console.log(`Este es el usuario encontrado según su mail:` , buscarUsuario("email", "ramonHu@gmail.com")); // Buscar por email

//Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

function borrarUsuario(nombre, email) {
    // Filtra todos los usuarios cuyo nombre e email no sean igual al nombre e email pasado como parámetro.
  const nuevaListaUsuarios = usuarios.filter(function(usuarios) {
    return  usuarios.nombre.email !== nombre.email;
  });
  console.log(`El usuario con nombre: ${nombre} e email:${email} ha sido eliminado.`);
}
// Llamar a la función para borrar un usuario por su nombre, mail
borrarUsuario('Lara', 'LaraGala@gmail.com');

//4.Sistema de Préstamos 











//5. Reportes. Generar funcion :
function generarReporteLibros(libros, usuarios) {
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
    /// Paso 1: Filtrar los libros por género
    const librosPorGenero = libros.filter(function(libro) {
        return libro.genero ; // Filtra todos los libros que tengan un género
    });
        // Paso 2: Extraer un array solo con géneros
   const soloGeneros = librosPorGenero.map(function(libro) {
       return libro.genero;
       });
       
      //Paso 3: Contar la frecuencia en que cada genero aparece.
      const contarGeneros = soloGeneros.reduce(function(acum, genero) {
        if (acum[genero]) {
          acum[genero]++;
        } else {
          acum[genero] = 1;
        }
        return acum;
      }, {}); 

    console.log("Cantidad de libros por género:", contarGeneros);

   //Libro más antiguo y más nuevo. Dos funciones, para saber el más antiguo y para saber el más nuevo.

   const libroMasAntiguo = function(libros) {
        return libros.reduce(function(acum, libro){
            return (libro.anio < acum.anio) ? libro : acum; // Compara años de publicación
    });
    };
    const resultadoMasAntiguo = libroMasAntiguo(libros);  // Llamar a la función
    console.log("Libro más antiguo:", resultadoMasAntiguo);  // Mostrar el resultado

    const libroMasNuevo = function(libros) {
        return libros.reduce(function(acum, libro){
            return (libro.anio > acum.anio) ? libro : acum; // Compara años de publicación
    });
    };
    const resultadoMasNuevo = libroMasNuevo(libros);  // Llamar a la función
    console.log("Libro más nuevo:", resultadoMasNuevo);  // Mostrar el resultado

}
      


// Llamar a la función para sumar libros, sumar librosPrestados, cantidad de libros por género. 
generarReporteLibros(libros, usuarios);

 //6. Identificación Avanzada de libros









 //7.Cálculos Estadísticos

function calcularEstadisticas(libros, anios) {
    // Paso 1: Sumar los años de publicación
    const sumaAnios = libros.reduce(function (suma, libro) {
        return suma + libro.anio;
    }, 0);
    //console.log(`Esta es la suma de años:`, sumaAnios);
    // Paso 2: Calcular el promedio
    const promedio = sumaAnios / libros.length;
    //console.log (`Este es el promedio de la suma de años:`,promedio)
    // Paso 3: Redondear el promedio
     const promedioRedondeado = Math.round(promedio);
     // Paso 4: Mostrar el promedio redondeado
    console.log(`El promedio redondeado de años de publicación es:`, promedioRedondeado);
     // Paso 5: Retornar el resultado redondeado
    return promedioRedondeado;
  

}

// Llamada a la función
calcularEstadisticas(libros);



//8. Manejo de Cadenas








//9.Interfaz de Usuario por Consola


















