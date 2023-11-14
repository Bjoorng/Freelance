import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ViolinsComponent } from './violins/violins.component';
import { InstrumentComponent } from './instrument/instrument.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'violins', component: ViolinsComponent },
  { path: 'instrument', component: InstrumentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
