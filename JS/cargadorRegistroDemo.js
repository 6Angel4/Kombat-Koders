const usuarioActual = localStorage.getItem("Usuarios");
if (!usuarioActual) {
    
    const usuarios = [
        { emailRegistro: "email1@gmail.com", passwordRegistro: "password1" },
        { emailRegistro: "email2@gmail.com", passwordRegistro: "password2" },
        { emailRegistro: "email3@gmail.com", passwordRegistro: "password3" },
        { emailRegistro: "email4@gmail.com", passwordRegistro: "password4" },
        { emailRegistro: "email5@gmail.com", passwordRegistro: "password5" },
        { emailRegistro: "email6@gmail.com", passwordRegistro: "password6" },
        { emailRegistro: "email7@gmail.com", passwordRegistro: "password7" },
        { emailRegistro: "email8@gmail.com", passwordRegistro: "password8" },
        { emailRegistro: "email9@gmail.com", passwordRegistro: "password9" },
        { emailRegistro: "email10@gmail.com", passwordRegistro: "password10"},
    ];
       localStorage.setItem("Usuarios", JSON.stringify(usuarios));
}