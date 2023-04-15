import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HyS } from 'src/app/model/hy-s.model';
import { HySService } from 'src/app/service/hy-s.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})



export class SkillsComponent implements OnInit {
  hys: HyS[] = [];
  
  constructor(private TokenS: TokenService, private HySService: HySService, private ActivedR: ActivatedRoute) { }

  isLogged: boolean = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.TokenS.getToken()){
      this.isLogged = true;
      }else{
        this.isLogged = false
      }
  } 
  
  cargarSkills(){
    this.HySService.lista().subscribe(data =>{
      this.hys = data
      console.log(data)
    })
  }

  delete(id: Number){
    if(id){
      this.HySService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la Skill");
        }
      )
    }
  }
}

