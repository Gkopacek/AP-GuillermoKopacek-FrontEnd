import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-editar-edu',
  templateUrl: './editar-edu.component.html',
  styleUrls: ['./editar-edu.component.css']
})
export class EditarEduComponent implements OnInit {

  constructor(private edS: EducacionService, private acivatedR: ActivatedRoute, private router:Router, public Simagen: ImagenesService) { }
  edu:Educacion = null;
  ngOnInit(): void {
    const i = this.acivatedR.snapshot.params['id'];
    this.edS.detail(i).subscribe(data =>{
      this.edu = data
      console.log(data);
    }, err => {
      alert("no se pudo obtener info de la base de datos")
    })
  }

  onUpdate(){
    const id = this.acivatedR.snapshot.params['id'];
    this.edu.urlImg = this.Simagen.url
    this.Simagen.url = null
    this.edS.update(id, this.edu).subscribe(data =>{
      this.router.navigate([''])
    }, err =>{
      alert("no se pudo actualizar la educacion")
      this.router.navigate([''])
    })
  }

  UploadImagenEdu($event:any){
    const id = this.acivatedR.snapshot.params['id'];
    const name = "imgEdu_"+ id
    this.Simagen.uploadImagen($event, name)
    console.log($event)
}

cancell(){
  this.router.navigate([''])
}



}


