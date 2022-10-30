import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaExpComponent } from './components/experiencia/nueva-exp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditarExpComponent } from './components/experiencia/editar-exp.component'
import { EditarEduComponent } from './components/educacion/editar-edu.component';
import { NuevaEduComponent } from './components/educacion/nueva-edu.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent },
  {path:'nuevaexp', component: NuevaExpComponent},
  {path:'editarexp/:id', component: EditarExpComponent},
  {path:'editared/:id', component: EditarEduComponent},
  {path:'nuevaed', component: NuevaEduComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
