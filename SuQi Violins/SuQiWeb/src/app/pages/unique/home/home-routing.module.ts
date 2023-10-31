import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ViolinsComponent } from './violins/violins.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'violins', component: ViolinsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
