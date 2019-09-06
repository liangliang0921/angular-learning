import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyNGComponent } from './study-ng/study-ng.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'router1', component: StudyNGComponent },
  { path: 'router2', component: ExerciseComponent },
  { path: 'router3', component: PagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
