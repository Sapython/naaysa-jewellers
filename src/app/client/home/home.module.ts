import { WidgetsModule } from './../../widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    SwiperModule,
    WidgetsModule
  ]
})
export class HomeModule { }
