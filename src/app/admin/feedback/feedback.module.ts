import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LayoutsModule } from '../layouts/layouts.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    MatTabsModule,
    LayoutsModule,
    WidgetsModule
  ]
})
export class FeedbackModule { }
