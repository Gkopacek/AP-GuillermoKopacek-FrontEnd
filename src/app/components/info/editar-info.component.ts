import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-info',
  templateUrl: './editar-info.component.html',
  styleUrls: ['./editar-info.component.css']
})
export class EditarInfoComponent implements OnInit {

  constructor(private pService :PersonaService, private aRoute: ActivatedRoute, private router: Router) { }
  persona: Persona = null;
  
  ngOnInit(): void {
    const i = this.aRoute.snapshot.params['id'];
    this.pService.detail(i).subscribe(data =>{
      this.persona = data
      console.log(data);
    }, err => {
      alert("algo salio mal")
    })
  }

  onUpdate(){
    const id = this.aRoute.snapshot.params['id'];
    this.pService.update(id, this.persona).subscribe(data =>{
      this.router.navigate([''])
    }, err =>{
      alert("algo salio mal con la modificacion")
      this.router.navigate([''])
    })
  }

  uploadImage(){
    
  }

}
  

