import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HyS } from 'src/app/model/hy-s.model';
import { HySService } from 'src/app/service/hy-s.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {
  hys:HyS = null;
  
  constructor(private HySS: HySService, private acivatedR: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const i = this.acivatedR.snapshot.params['id'];
    this.HySS.detail(i).subscribe(data =>{
      this.hys = data
    }, err => {
      alert(err.error.mensaje)
    })
  }

  onUpdate(){
    const id = this.acivatedR.snapshot.params['id'];
    console.log(this.hys)
    this.HySS.update(id, this.hys).subscribe(data =>{
      this.router.navigate([''])
      console.log(data)
      alert(data.mensaje.error)
    }, err =>{
      alert(err.error.mensaje)
      /* this.router.navigate(['']) */
    })
  }
}
