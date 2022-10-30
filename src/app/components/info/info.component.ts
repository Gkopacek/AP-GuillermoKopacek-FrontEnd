import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  persona: Persona = new Persona("","","");
  constructor(public personaService: PersonaService) { }
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe((info) =>{
      return this.persona = info
    } 
      );
  }

  
}
