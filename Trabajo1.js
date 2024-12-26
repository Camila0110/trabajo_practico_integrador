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
       nombre: 'Esteban', 
       email: 'estebanUM@gmail.com', 
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
  
  // Ejemplo de uso de la función
  agregarLibro(1, "Cien años de soledad", "Gabriel García Márquez", 1967, "Novela");
  agregarLibro(2, "1984", "George Orwell", 1949, "Ciencia ficción");
  
  console.log("Así queda la lista de libros:", libros);


///Buscar Libros:
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
console.log(buscarLibro("autor", "Gabriel García Márquez")); // Buscar por autor
console.log(buscarLibro("genero", "Ciencia Ficción")); // Buscar por género

   
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

function mostrarTodosLosUsuarios() {
    let nombresUsuarios = usuarios.map(function(usuario) {
        return usuario.nombre;
    });
    console.log("Nombres de todos los usuarios:", nombresUsuarios);
}

mostrarTodosLosUsuarios();  // Llamada para mostrar solo los nombres


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
    const nuevaListaUsuarios = usuarios.filter(function(usuario) {
        return usuario.nombre !== nombre || usuario.email !== email;
    });
    usuarios = nuevaListaUsuarios;  // Actualiza la lista de usuarios
    console.log(`El usuario con nombre: ${nombre} e email:${email} ha sido eliminado.`);
}

// Llamar a la función para borrar un usuario por su nombre, mail
borrarUsuario('Lara', 'LaraGala@gmail.com');




//4.Sistema de Préstamos 

console.log("Lista de libros:", libros);
console.log("Lista de usuarios:", usuarios);

function prestarLibro(idLibro, idUsuario) {
    // Buscar el usuario y el libro
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    const libro = libros.find(libro => libro.id === idLibro);

    console.log("Usuario encontrado:", usuario);
    console.log("Libro encontrado:", libro);

    // Verificar si el libro y el usuario existen y si el libro está disponible
    if (libro && usuario && libro.disponible) {
        // Marcar el libro como no disponible
        libro.disponible = false;

        // Agregar el libro a la lista de libros prestados del usuario
        usuario.librosPrestados.push(idLibro);

        console.log (`El libro con ID ${idLibro} fue prestado al usuario con ID ${idUsuario}.`);
    } else {
        console.log("No se puede prestar el libro: Verifique que el libro y el usuario existan y que el libro esté disponible.");
    }
}

const totalLibrosPrestados = usuarios.reduce((acum, usuario) => acum + usuario.librosPrestados.length, 0);
console.log(`Cantidad total de libros prestados: ${totalLibrosPrestados}`);

// Prueba de la función
prestarLibro(5, 40); // Prestará el libro con ID 1 al usuario con ID 40
console.log(libros);   // Verifica que el libro ahora no está disponible
console.log(usuarios); // Verifica que el libro fue añadido a los libros prestados del usuario


function devolverLibro(idLibro, idUsuario) {
    // Buscar el usuario y el libro
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    const libro = libros.find(libro => libro.id === idLibro);

    // Verificar si el usuario y el libro existen y si el libro no está disponible
    if (libro && usuario && !libro.disponible) {
        // Marcar el libro como disponible
        libro.disponible = true;

        // Eliminar el libro de la lista de libros prestados del usuario
        usuario.librosPrestados = usuario.librosPrestados.filter(libroId => libroId !== idLibro);

        console.log(`El libro con ID ${idLibro} fue devuelto correctamente por el usuario con ID ${idUsuario}.`);
    } else {
        console.log("No se puede devolver el libro: Verifique que el usuario y el libro existan y que el libro esté prestado.");
    }
}



// Prueba de la función
devolverLibro(1, 20); // Devuelve el libro con ID 1 del usuario con ID 101
console.log(libros);   // Verifica que el libro ahora está disponible
console.log(usuarios); // Verifica que el libro fue eliminado de los libros prestados del usuario




//5. Reportes. Generar funcion :

function generarReporte(libros, usuarios) {
    const totalLibros = libros.length;
    const librosPrestados = usuarios.reduce((acum, usuario) => acum + usuario.librosPrestados.length, 0);
    const librosDisponibles = libros.filter(libro => libro.disponible).length;

    console.log(`
        Reporte de Libros:
        -----------------
        Total de libros: ${totalLibros}
        Libros prestados: ${librosPrestados}
        Libros disponibles: ${librosDisponibles}
    `);
}

// Llamar al reporte

generarReporte(libros, usuarios);

    //Libros por Género
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


      


// Llamar a la función para sumar libros, sumar librosPrestados, cantidad de libros por género. 
//generarReporteLibros(libros, usuarios);


 //6. Identificación Avanzada de libros

 
 const LibrosConPalabrasEntitulo = () => {  
    return libros
    .filter(libro => libro.titulo && libro.titulo.split('').length > 1)
    .map(libro =>libro.titulo);
  };
 console.log(LibrosConPalabrasEntitulo());


 //7.Cálculos Estadísticos

function calcularEstadisticas(libros) {
    // Paso 1: Sumar los años de publicación
    const sumaAnios = libros.reduce(function (suma, libro) {
        if (typeof libro.anio === 'number') {
            return suma + libro.anio;  // Solo suma si 'anio' es un número
        }
        return suma;  // Si no es un número, no lo suma
    }, 0);
    
   // console.log(`Esta es la suma de años:`, sumaAnios);

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


function normalizarDatos() {
    libros.forEach(libro => {
        // Verificar si el libro tiene las propiedades autor, titulo y email
        if (libro.autor) {
            libro.autor = libro.autor.trim();  // Eliminar espacios al principio y al final
        } else {
            console.log(`El libro "${libro.titulo}" no tiene un autor definido.`);
        }

        if (libro.titulo) {
            libro.titulo = libro.titulo.trim();  // Eliminar espacios al principio y al final
        }

        if (libro.email) {
            libro.email = libro.email.trim().toLowerCase();  // Convertir el email a minúsculas y eliminar espacios
        }
    });
}

// Antes de normalizar
console.log("Antes de normalizar:", libros);

// Llamar a la función
normalizarDatos();

// Después de normalizar
console.log("Después de normalizar:", libros);





//9.Interfaz de Usuario por Consola

function menuPrincipal(){
    let opcion;
   
    let continuar = true; // Variable para controlar si el usuario desea continuar


    do{

        console.log("\n--- Menú Principal ---");
        console.log('1) Agregar Libro');
        console.log('2) Buscar libro');
        console.log('3) Ordenar Libros Por Año');
        console.log('4) Borrar libros');
        console.log('5) Agregar Usuario');
        console.log('6) Mostrar todos los Usuarios');
        console.log('7) Buscar Usuario');
        console.log('8) Prestar Libro');
        console.log('9) Devolver Libro');
        console.log('10) Generar Reporte Libros');
        console.log('11) calcular Estadisticas');
        console.log('12) Normalizar Datos');
       
        console.log('0) Salir');
        
        opcion = parseInt(prompt('Seleccione una opción: '));console.log()

        switch(opcion){
            case 1:
                //agregarLibro();
                const id = parseInt(prompt("Ingrese ID del libro: "));
                const titulo = prompt("Ingrese título del libro: ");
                const autor = prompt("Ingrese autor del libro: ");
                const anio = parseInt(prompt("Ingrese año de publicación: "));
                const genero = prompt("Ingrese género del libro: ");
                agregarLibro(id, titulo, autor, anio, genero);
                break;
            case 2:
                //buscarLibro()
                const criterio = prompt("Buscar por (id, titulo, autor, genero): ");
                const valor = prompt("Ingrese valor de búsqueda: ");
                console.log(buscarLibro(criterio, valor));
                break;
            case 3:
                //ordenarlibros()
                ordenarLibrosPorAnio(libros);
                console.log("Libros ordenados por año:", libros);
                break;
            case 4:
                //borrarlibros()
                const idBorrar = parseInt(prompt("Ingrese ID del libro a borrar: "));
                borrarLibroPorId(idBorrar);
                break;
            case 5:
                //agregarUsuario()
                const usuarioId = parseInt(prompt("Ingrese ID del usuario: "));
                const nombre = prompt("Ingrese nombre del usuario: ");
                const email = prompt("Ingrese email del usuario: ");
                agregarUsuario(usuarioId, nombre, email, []);
                break;
            case 6:
                //mostrarTodosLosUsuarios()
                mostrarTodosLosUsuarios()
                break;
            case 7:
                //buscarUsuario()
                const emailBuscar = prompt("Ingrese email del usuario: ");
                console.log(buscarUsuario("email", emailBuscar));
                break;
            case 8:
               //prestarLibro()
               prestarLibro()
                    break;
            case 9:
              //devolverLibro()
              devolverLibro()
                   break;
            case 10:
              //generarReporteLibros()
              generarReporte(libros, usuarios);
                break;
            case 11:
              //calcularEstadistica()
              calcularEstadisticas()
                  break;
             case 12:
                  //normalizarDatos()
                  normalizarDatos()
                     break;
              case 0:
                   console.log('Saliendo del programa...');
                   continuar = false; // Detener el ciclo
                  break;
        }
        if (continuar) {
            const respuesta = prompt('¿Desea realizar otra acción? (si/no): ').toLowerCase();
            if (respuesta !== 'si') {
                continuar = false; // Salir del ciclo
                console.log('Gracias por usar el sistema. ¡Hasta luego!');
            }
        }
    } while (continuar);
}




menuPrincipal();
