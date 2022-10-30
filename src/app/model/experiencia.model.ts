export class Experiencia {
    id?:number;
    nombreE:string;
    descripcionE:string;
    urlImg:string;

    constructor(nombreE:string, descripcionE:string, urlImg:string){
        this.nombreE= nombreE;
        this.descripcionE= descripcionE;
        this.urlImg = urlImg;
    }
}
