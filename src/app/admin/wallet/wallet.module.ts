import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { ViewHistoryComponent } from './view-history/view-history.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';


@NgModule({
  declarations: [
    WalletComponent,
    ViewHistoryComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    MatDialogModule
  ]
})
export class WalletModule { }
