import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { ViewHistoryComponent } from './view-history/view-history.component';



@NgModule({
  declarations: [
    WalletComponent,
    ViewHistoryComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    
  ]
})
export class WalletModule { }
