import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    MatTabsModule,
    LayoutsModule
  ]
})
export class FeedbackModule { }
