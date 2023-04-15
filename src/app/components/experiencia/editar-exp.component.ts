import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {
  experiencia:Experiencia = null;
  constructor(private expS: ExperienciaService, private router: Router, private activatedR: ActivatedRoute){}

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
    this.expS.update(id, this.experiencia).subscribe(data =>{
      alert("Experiencia modificada");
      this.router.navigate([''])
    }, err =>{
      alert(err.error.mensaje)
      this.router.navigate([''])
    })
  }
}
