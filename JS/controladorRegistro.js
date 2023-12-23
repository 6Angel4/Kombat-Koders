// Crear controlador 
export class ControladorRegistro {
    constructor() {
        this.registros = [];
    }

    // Función registrar usuarios
    agregarRegistro(name, phoneNumber, email, password, password2) {
        let idUltimoUsuarioRegistrado;
        this.registros = this.cargarRegistrosFromLocalStorage();
        if (this.registros.length === 0) {
            idUltimoUsuarioRegistrado = -1;
        } else {
            idUltimoUsuarioRegistrado = this.registros[this.registros.length - 1].id;
        }
        const registro = {
            id: idUltimoUsuarioRegistrado + 1,
            nombreRegsitro: name,
            telefonoRegistro: phoneNumber,
            emailRegistro: email,
            passwordRegistro: password,
        };
        this.registros.push(registro);
        this.pushRegistrosFromLocalStorage();
    }
    pushRegistrosFromLocalStorage() {
        localStorage.setItem("Usuarios", JSON.stringify(this.registros));
    }

    cargarRegistrosFromLocalStorage() {
        const storageRegistros = localStorage.getItem("Usuarios")
        if (storageRegistros) {
            return JSON.parse(storageRegistros);
        } else {
            return [];
        }
    }


    buscarRegistroLocalStorage(emailFormulario, passwordFormulario) {
        console.log(emailFormulario, passwordFormulario);
        this.registros = this.cargarRegistrosFromLocalStorage();
        console.log(this.registros);
        const usuarioRegistrado = this.registros.find(usuario => usuario.emailRegistro === emailFormulario);
        console.log(usuarioRegistrado, "tarea10noqueda");
        if (!usuarioRegistrado) {
            console.log("usuario no encontrado");
        } else {
            if (usuarioRegistrado.passwordRegistro === passwordFormulario) {
                return true;
            } else {
                return false;
            }
         }
    }
};