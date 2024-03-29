import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/components/proyectos/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [] 
  
  constructor(private proyectService:ProyectoService,private tokenService:TokenService){}

  isLogged: boolean = false;

  ngOnInit(): void {
    this.cargarProyectos()
    if(this.tokenService.getToken()){
      this.isLogged = true;
  }else{
    this.isLogged = false;
  }
  }

  cargarProyectos():void{
    this.proyectService.lista().subscribe(
      data => {this.proyectos = data
      }
      
    )
  }

  delete(id?: number){
    if(id){
      this.proyectService.delete(id).subscribe(
        data => {
          alert(data.mensaje)
          this.cargarProyectos();
        }, err => {
          alert(err.error.mensaje)
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}





