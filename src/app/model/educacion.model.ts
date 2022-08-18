export class Educacion{
    nombre_institucion: string;
    carrera: string;
    periodo: string;
    
    constructor(nombre_institucion: string, carrera: string, periodo: string) {
        this.nombre_institucion = nombre_institucion;
        this.carrera = carrera;
        this.periodo = periodo;
    }
}