import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { ProyectoService } from './proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent {

  constructor(private proyService: ProyectoService, private acivatedR: ActivatedRoute,  public imagen: ImagenesService, private router: Router){
    
  }

  proyecto:Proyecto = new Proyecto("Un nombre", "una descripcion", "una URL de imagen");
  
  ngOnInit(): void {
    const i = this.acivatedR.snapshot.params['id'];
    this.proyService.detail(i).subscribe(data =>{
      this.proyecto = data
    }, err => {
      alert(err.error.mensaje)
    })
  }

  onUpdate(){
    const id = this.acivatedR.snapshot.params['id'];
    this.proyecto.imgProyect = this.imagen.url;
    this.imagen.url = null;
    this.proyService.update(id, this.proyecto).subscribe(data =>{
      alert(data.mensaje)
      this.router.navigate([''])
    }, err =>{
      alert(err.error)
     /*  this.router.navigate(['']) */
    })
  }

  uploadImagenProyecto($event: any){
    const id = this.acivatedR.snapshot.params['id'];
    const name = "proyecto_"+id;
    this.imagen.uploadImagen($event, name)
  }

  cancell(){
    this.router.navigate([''])
  }

}
