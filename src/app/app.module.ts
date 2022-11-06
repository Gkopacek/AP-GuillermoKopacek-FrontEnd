
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BanerComponent } from './components/baner/baner.component';
import { InfoComponent } from './components/info/info.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { interceptorProvider } from './service/interceptor-service';
import { NuevaExpComponent } from './components/experiencia/nueva-exp.component';
import { EditarExpComponent } from './components/experiencia/editar-exp.component';
import { EditarEduComponent } from './components/educacion/editar-edu.component';
import { NuevaEduComponent } from './components/educacion/nueva-edu.component';
import { EditarInfoComponent } from './components/info/editar-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NuevaSkillComponent } from './components/skills/nueva-skill.component';
import { EditarSkillComponent } from './components/skills/editar-skill.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BanerComponent,
    InfoComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    HomeComponent,
    LoginComponent,
    PruebasComponent,
    NuevaExpComponent,
    EditarExpComponent,
    EditarEduComponent,
    NuevaEduComponent,
    EditarInfoComponent,
    FooterComponent,
    NuevaSkillComponent,
    EditarSkillComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
