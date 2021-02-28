import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GistsComponent } from './gists.component';

const routes: Routes = [{ path: '', component: GistsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GistsRoutingModule { }
