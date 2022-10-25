
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
