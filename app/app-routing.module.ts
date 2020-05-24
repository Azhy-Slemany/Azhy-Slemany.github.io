import { ResourcesComponent } from './resources/resources.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  {
    path:'',
    component:AboutComponent
    
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'resources',
    component:ResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
