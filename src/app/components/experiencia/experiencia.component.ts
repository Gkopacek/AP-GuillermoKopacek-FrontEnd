import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia.model';
import { TokenService } from 'src/app/service/token.service';
/* import { Trabajo} from 'src/app/model/trabajo.model' */
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
    experiencia: Experiencia[] = [];

/*     trabajos:Trabajo[] = [
      { nombre_empresa:'técnico en reparación de PC (autonomo)', tarea: "armado y reparacion de PC a domicilio, configuracion de redes de casa y oficina", periodo: "2011-2016", img:"https://us.123rf.com/450wm/ronstik/ronstik1803/ronstik180300017/97313811-t%C3%A9cnico-de-reparaci%C3%B3n-de-computadora-port%C3%A1til-closeup.jpg?ver=6"},
      { nombre_empresa:'ABB', tarea: "Soluconar problemas de tipo informatico que se presentaran en sitio", periodo: "2016-2021", img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAvCAMAAADuOqUiAAAAbFBMVEX/AA//////AAD/hIX/PkD/8vL/urr/eXr/ODv/4+P/T1L/AAn/a23/Gx//cnT/3N3/+Pj/fn//09P/7O3/pab/mpv/LjH/Mzb/r7D/kZP/SEv/tLT/qar/xMX/oKD/jY7/WFv/Jir/ZWf/y8tcz6IBAAADHUlEQVRYhcXY55aqMBAA4GQUULEgqNgFfP93vJSUSSGZPWfP3fkhsIR8m0ISwvjfBHP+shiDP4ffLHGfKBYojmWV9YdTaSW64kQ3fh5+0yLkljAE4914PLluAjjStTgxU+5xmgu/TyddNe8ugDGW7/h2OMLS5+ZMxeCOJznUuG4yQGlWfDNdAjxm3TFX6TJYE93+lCHY7/bnzxn3O6bQ7o3sMrjHXQYHv7s13bylu0zXYsCtvW4hWku6DOyeGnLruCsztNzUcY90F/WGgPvxuRvbzeEn7ovgbjxuIu5rF+VFcK9xV/QY0z153O4HrupYgfKuPG7tugwKunsguHvXVXkY7oPq5jknuA/XvXndDdVFfT/gctdlMkfsMqhobg5J3IW365Y6C8N901xIedRVYyl2jzPuiuSqIT/g6vkNuzpDw7UmpRnXfN/mXNVkyH2hnmm6H1J5WRl1dVbI7ebc/org9v3qFHVVTWu3wEuTwUVRGq53nTPGTbso6t7VwSw3vSx13Plxpa9qXNEJurG8vNYtumzlYP7BiRq+xZk1Vj3/11BugYtrlXd5QRVtlbfq9ii24mWyyvvZG4mwezWazWpfyJAbaN8+plnEat+7meaN3DvqgVZ/Nmf/wHzE1OgxPz6L90O6lX3HcPHsH3GbuDsMRNJ9R9yO6Ip3PeKmym1z6+mtlbSguWIojLg36R6c/9p2r1R3TXAX0v1E3c1vupl0wahmj6unkt8sb2k97HPPtH41LToi7km4GcGtaW5L6c9f4aK5VoT47gZ050B6f48UV4wbqZ4eu/VhDD4d12d9a0Fyy7g7DAaj2+jM7a8SPY7J2T/oytYIu+XkFmjJwO1AS4UvwX3F3XFNObhPnXXmuA99cx911XAadCvhLu0i4UhQZRQRF1oed6dlNjOa0K1mo/HTsAu7JO6KibJ33S5rBOrsTcjN4a6/HGfXsbID9O5O5eNuZvCh1+n7yawL5s7Z3P5VI2uEiQ06tMS0o9MJTnxundNS9uv26vu4d9Oj2ki0vnRFlDrBMEZ79iffr8p6xt2fvD2Myvyrdew/u0ozIh7upXAAAAAASUVORK5CYII=" },
      
      { nombre_empresa:'ingeniero de campo (intosys)', tarea: "Soluconar problemas de tipo informatico que se presentaran en sitio", periodo: "2021 - actualidad", img: "https://pbs.twimg.com/profile_images/1512072368071401490/VqtJH2xU_400x400.jpg"}
  ]; */

    constructor(private experService:ExperienciaService,private tokenS:TokenService) { }

  isLogged:boolean = false

  ngOnInit(): void {
    this.cargarExpLab()
    if(this.tokenS.getToken()){
      this.isLogged = true;
  }else{
    this.isLogged = false;
  }
  }

  cargarExpLab():void{
    this.experService.lista().subscribe(
      data => {this.experiencia = data
      }
      
    )
  }

  delete(id?: number){
    if(id){
      this.experService.delete(id).subscribe(
        data => {
          this.cargarExpLab();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
  


}

