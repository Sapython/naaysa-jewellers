import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { MatIconModule } from '@angular/material/icon';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AdminHeaderComponent, StarComponent],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [HeaderComponent, FooterComponent, AdminHeaderComponent, StarComponent],
})
export class ComponentsModule {}
