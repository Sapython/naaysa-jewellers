import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { MatIconModule } from '@angular/material/icon';
import { StarComponent } from './star/star.component';

import { SwiperModule } from 'swiper/angular';
import { PopularCollectionComponent } from './popular-collection/popular-collection.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AdminHeaderComponent, PopularCollectionComponent],
  imports: [CommonModule, RouterModule, MatIconModule, SwiperModule],
  exports: [HeaderComponent, FooterComponent, AdminHeaderComponent, PopularCollectionComponent],
})
export class ComponentsModule { }
