import { TenPlusOneComponent } from './../admin/ten-plus-one/ten-plus-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

const components = [TenPlusOneComponent]
@NgModule({
  declarations: [
  
  
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),

  ]
})
export class ClientModule { }
