import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-info',
  templateUrl: './editar-info.component.html',
  styleUrls: ['./editar-info.component.css']
})
export class EditarInfoComponent implements OnInit {

  constructor(private pService :PersonaService, private aRoute: ActivatedRoute, private router: Router, public imagen:ImagenesService) { }
  persona: Persona = null;
  
  ngOnInit(): void {
    const i = this.aRoute.snapshot.params['id'];
    this.pService.detail(i).subscribe(data =>{
      this.persona = data
      console.log(data);
    }, err => {
      alert("no se pudo obtener info de la base de datos")
    })
  }

  onUpdate(){
    const id = this.aRoute.snapshot.params['id'];
    this.persona.img = this.imagen.url;
    this.imagen.url = null;
    this.pService.update(id, this.persona).subscribe(data =>{
      this.router.navigate([''])
    }, err =>{
      alert("algo salio mal")
      this.router.navigate([''])
    })
  }

  uploadImagenBio($event: any){
    /*const id = this.aRoute.snapshot.params['id'];
    const name = "bio_"+id;*/
    this.imagen.uploadImagen($event/*, name*/)
  }

} 
  

