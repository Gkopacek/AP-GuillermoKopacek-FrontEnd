import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-edu',
  templateUrl: './nueva-edu.component.html',
  styleUrls: ['./nueva-edu.component.css']
})
export class NuevaEduComponent implements OnInit {

  constructor(private eduS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  nombreEd:string = '';
  descripcionEd:string = '';
  urlImg:string = '';

  onCreate():void{
    const edu = new Educacion(this.nombreEd, this.descripcionEd, this.urlImg);
    this.eduS.save(edu).subscribe(
      data=>{
        alert(data.mensaje);
        this.router.navigate(['']);
      }, err =>{
        alert(err.error.mensaje)
        /* this.router.navigate(['']); */
      }
      )
  }

  cancell(){
    this.router.navigate([''])
  }

}
