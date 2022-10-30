import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  persona: Persona = new Persona("","","","","");
  constructor(public personaService: PersonaService, public TokenS: TokenService) { }
  
  isLogged: boolean = false;

  ngOnInit(): void {
    this.cargarInfoPersona();
    if(this.TokenS.getToken()){
      this.isLogged = true;
      }else{
        this.isLogged = false
      }
  } 
  
  cargarInfoPersona(){
    this.personaService.detail(1).subscribe(data =>{
      this.persona = data
      console.log(data)
    })
  }

}

  

