import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/components/proyectos/proyecto.service';


@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent {

  constructor(private ProyService: ProyectoService, private router: Router) { }

  nombrePr:string = '';
  descripcionPr:string = '';
  urlImg:string = '';

  onCreate():void{
    const proyect = new Proyecto(this.nombrePr, this.descripcionPr, this.urlImg);
    this.ProyService.save(proyect).subscribe(
      data=>{
        alert(data.mensaje);
        this.router.navigate(['']);
      }, err =>{
        alert(err.error.mensaje)
        this.router.navigate(['']);
      }
    )
  }

  cancell(){
    this.router.navigate([''])
  }

}
