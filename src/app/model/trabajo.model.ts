export class Trabajo{
    nombre_empresa: string;
    tarea: string;
    periodo: string;
    img: string;
    
    constructor(nombre_empresa: string, tarea: string, periodo: string, img: string) {
        this.nombre_empresa = nombre_empresa;
        this.tarea = tarea;
        this.periodo = periodo;
        this.img = img;
    }
}
