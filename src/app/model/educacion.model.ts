export class Educacion{
    id?: number;
    nombreEst: string;
    descripcionEst: string;
    urlImg: string;
    
    constructor(nombreEst: string, descripcionEst: string, urlImg: string){
        this.nombreEst = nombreEst;
        this.descripcionEst = descripcionEst;
        this.urlImg = urlImg;
    }
}