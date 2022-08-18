export class Educacion{
    nombre_institucion: string;
    carrera: string;
    periodo: string;
    img: string;
    
    constructor(nombre_institucion: string, carrera: string, periodo: string, img: string) {
        this.nombre_institucion = nombre_institucion;
        this.carrera = carrera;
        this.periodo = periodo;
        this.img = img;
    }
}