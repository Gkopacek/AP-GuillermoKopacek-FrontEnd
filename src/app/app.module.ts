import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* import { NgCircleProgressModule } from 'ng-circle-progress'; */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BanerComponent } from './components/baner/baner.component';
import { InfoComponent } from './components/info/info.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BanerComponent,
    InfoComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
   /*  NgCircleProgressModule.forRoot({}) */
          ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
