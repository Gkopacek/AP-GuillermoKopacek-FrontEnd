export class UsuarioLogin {
    nombreUsuario: string;
    password: string;

    constructor(nombreUsuario:string, password:string){
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
