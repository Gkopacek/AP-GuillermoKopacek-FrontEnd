import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {
  experiencia:Experiencia = null;
  constructor(private expS: ExperienciaService, private router: Router, private activatedR: ActivatedRoute, public imagen: ImagenesService){}

  ngOnInit(): void {
    const i = this.activatedR.snapshot.params['id'];
    this.expS.detail(i).subscribe(data =>{
      this.experiencia = data
    }, err => {
      alert(err.error.mensaje)
    })
  }

  onUpdate(){
    const id = this.activatedR.snapshot.params['id'];
    this.experiencia.urlImg = this.imagen.url;
    this.imagen.url = null;
    this.expS.update(id, this.experiencia).subscribe(data =>{
      alert(data.mensaje)
      this.router.navigate([''])
    }, err =>{
      alert(err.error)
     /*  this.router.navigate(['']) */
    })
  }
  
  uploadImagenExpe($event: any){
    const id = this.activatedR.snapshot.params['id'];
    const name = "experiencia_"+id;
    this.imagen.uploadImagen($event, name)
  }
  
  cancell(){
    this.router.navigate([''])
  }

}