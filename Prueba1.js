

// Función para el menú principal

function menuPrincipal(){
    let tengoQueSalir = false

    while(!tengoQueSalir){
        console.log("hola bienvenido al programa de Gestión de Bibliotecas. Esta es la lista de opciones que podes elegir: ")
        console.log('1) Agregar Libro')
        console.log('2) Buscar libro')
        console.log('3) Ordenar Libros Por Año')
        console.log('4) Borrar libros')
        console.log('5) Agregar Usuario')
        console.log('6) Mostrar todos los Usuarios')
        console.log('7) Buscar Usuario')
        console.log('8) Prestar Libro')
        console.log('9) Devolver Libro')
        console.log('10) Generar Reporte Libros')
        console.log('11) calcular Estadisticas')
        console.log('12) Normalizar Datos')
       
        console.log('13) Salir')
        
        let opcionElegida = prompt('Elegi lo que queres hacer: ');

        switch(opcionElegida){
            case "1":
                //agregarLibro();
                agregarLibroPrompt()
                break;
            case "2":
                //buscarLibro()
                buscarLibroPrompt()
                break;
            case "3":
                //ordenarlibros()
                ordenarLibrosPorAnioPrompt()
                break;
            case "4":
                //borrarlibros()
                borrarlibrosPrompt()
                break;
            case "5":
                //agregarUsuario()
                agregarUsuarioPrompt()
                break;
            case "6":
                //mostrarTodosLosUsuarios()
                mostrarTodosLosUsuariosPrompt()
                break;
            case "7":
                //buscarUsuario()
                buscarUsuarioPrompt()
                break;
            case "8":
               //prestarLibro()
               prestarLibroPrompt()
                    break;
            case "9":
              //devolverLibro()
              devolverLibroPrompt()
                   break;
            case "10":
              //generarReporteLibros()
              generarReporteLibrosPrompt()
                  break;
            case "11":
              //calcularEstadistica()
              calcularEstadisticaPrompt()
                  break;
             case "12":
                  //normalizarDatos()
                  normalizarDatosPrompt()
                     break;
            case "13 ":
                tengoQueSalir = true;
                break;
            default:
                console.log('opcion ingresada incorrecta, elija una de las correctas')
        }

        if (!tengoQueSalir){
            let continuar = prompt('Desea continuar? Si/No : ');

            if(continuar.toLowerCase() === 'si'){
                tengoQueSalir = false;
            }
            else
            {
                tengoQueSalir = true;
            }
        }
    }
    
}




menuPrincipal()




