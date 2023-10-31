import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ViolinsComponent } from './violins/violins.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ViolinsComponent
  ],
  imports: [
    MatCardModule,
    CommonModule,
    HomeRoutingModule,
    NgbModule,
  ]
})
export class HomeModule { }
