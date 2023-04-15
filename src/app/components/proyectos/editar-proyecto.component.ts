import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from './proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent {

  constructor(private proyService: ProyectoService, private acivatedR: ActivatedRoute, ){}

  proyecto:Proyecto = new Proyecto("Un nombre", "una descripcion", "una URL de imagen");
  
  onCreate(){
    alert("Proyecto guardado con exito")
  }

}
