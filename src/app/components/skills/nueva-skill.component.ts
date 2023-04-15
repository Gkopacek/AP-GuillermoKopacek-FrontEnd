import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HyS } from 'src/app/model/hy-s.model';
import { HySService } from 'src/app/service/hy-s.service';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css']
})
export class NuevaSkillComponent implements OnInit {
  

  nombre:string = "";
  porcentaje: number;
  img:string="";

  constructor(private HySS: HySService, private router: Router ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const hys = new HyS(this.nombre, this.porcentaje, this.img);
    this.HySS.save(hys).subscribe(
      data=>{
        console.log(data.mensaje)
        alert(data.mensaje);
        this.router.navigate(['']);
      }, err =>{
        alert(err.error.mensaje)
        this.router.navigate(['']);
      }
      )
  }
}
