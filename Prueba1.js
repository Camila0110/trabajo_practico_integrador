

// Función para el menú principal
const prompt = require('prompt-sync')()


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
                mostrarTodosLosUsuariosPrompt()
                break;
            case 7:
                //buscarUsuario()
                const emailBuscar = prompt("Ingrese email del usuario: ");
                console.log(buscarUsuario("email", emailBuscar));
                break;
            case 8:
               //prestarLibro()
               prestarLibroPrompt()
                    break;
            case 9:
              //devolverLibro()
              devolverLibroPrompt()
                   break;
            case 10:
              //generarReporteLibros()
              generarReporteLibros(libros, usuarios);
                break;
            case 11:
              //calcularEstadistica()
              calcularEstadisticaPrompt()
                  break;
             case 12:
                  //normalizarDatos()
                  normalizarDatosPrompt()
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
