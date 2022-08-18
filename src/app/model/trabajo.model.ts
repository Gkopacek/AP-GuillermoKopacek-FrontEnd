export class Trabajo{
    nombre_empresa: string;
    tarea: string;
    periodo: string;
    
    constructor(nombre_empresa: string, tarea: string, periodo: string) {
        this.nombre_empresa = nombre_empresa;
        this.tarea = tarea;
        this.periodo = periodo;
    }
}
