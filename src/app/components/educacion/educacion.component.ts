import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones:Educacion[] = [
    { nombre_institucion :'ITA', carrera: "Tecnico de computadoras y redes informaticas", periodo: "2011-2016" },
    { nombre_institucion :'Educacion IT', carrera: "python", periodo: "2021-actualidad" },
    { nombre_institucion :'Argentina Programa', carrera: "programador fullStack JR", periodo: "2022-2022" },
];
  constructor() {}

  ngOnInit(): void {
  }

}
