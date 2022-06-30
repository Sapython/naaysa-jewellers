import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenPlusOneSchemaComponent } from './ten-plus-one-schema.component';

const routes: Routes = [{ path: '', component: TenPlusOneSchemaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenPlusOneSchemaRoutingModule { }
