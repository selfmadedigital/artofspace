import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnepageComponent } from './onepage/onepage.component';


const routes: Routes = [
  { path: '', component: OnepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
