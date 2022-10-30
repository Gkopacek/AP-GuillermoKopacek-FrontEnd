export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    categoria: string;
    bio: string;
    img: string;

    constructor(nombre: string, apellido: string, categoria: string, bio: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.categoria = categoria;
        this.bio = bio;
        this.img = img;
    }
}