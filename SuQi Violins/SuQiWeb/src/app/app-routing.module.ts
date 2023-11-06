import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/unique/contacts/contacts.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/unique/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
