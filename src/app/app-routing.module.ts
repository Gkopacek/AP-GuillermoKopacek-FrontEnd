import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaExpComponent } from './components/experiencia/nueva-exp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditarExpComponent } from './components/experiencia/editar-exp.component'
import { EditarEduComponent } from './components/educacion/editar-edu.component';
import { NuevaEduComponent } from './components/educacion/nueva-edu.component';
import { EditarInfoComponent } from './components/info/editar-info.component';
import { NuevaSkillComponent } from './components/skills/nueva-skill.component';
import { EditarSkillComponent } from './components/skills/editar-skill.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent },
  {path:'nuevaexp', component: NuevaExpComponent},
  {path:'editarexp/:id', component: EditarExpComponent},
  {path:'editared/:id', component: EditarEduComponent},
  {path:'nuevaed', component: NuevaEduComponent},
  {path:'editar-info/:id', component: EditarInfoComponent},
  {path:'nuevaSkill', component: NuevaSkillComponent},
  {path:'editaSkill/:id', component: EditarSkillComponent},
  {path:'nuevoProyecto', component: NuevoProyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
