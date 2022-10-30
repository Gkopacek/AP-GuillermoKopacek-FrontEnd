import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css']
})
export class NuevaExpComponent implements OnInit {

  constructor(private expS: ExperienciaService, private router: Router) { }
  nombreE:string = '';
  descripcionE:string = '';
  urlImg:string = '';

ngOnInit(): void {
  }

  onCreate():void{
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.urlImg);
    this.expS.save(expe).subscribe(
      data=>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo")
        this.router.navigate(['']);
      }
      )
  }
}
