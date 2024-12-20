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
// Llamar a la función para buscar un libro por su ID
borrarUsuario('Lara', 'LaraGala@gmail.com');


