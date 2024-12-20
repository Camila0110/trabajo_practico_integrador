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


