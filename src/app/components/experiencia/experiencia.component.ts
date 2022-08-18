import { Component, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/model/trabajo.model';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajos:Trabajo[] = [
    { nombre_empresa:'técnico en reparación de PC (autonomo)', tarea: "armado y reparacion de PC a domicilio, configuracion de redes de casa y oficina", periodo: "2011-2016" },
    { nombre_empresa:'ABB', tarea: "Soluconar problemas de tipo informatico que se presentaran en sitio", periodo: "2016-2021"},
    { nombre_empresa:'ingeniero de campo (intosys)', tarea: "Soluconar problemas de tipo informatico que se presentaran en sitio", periodo: "2021 - actualidad"}
];
  
  constructor() { }

  ngOnInit(): void {
  }

}
