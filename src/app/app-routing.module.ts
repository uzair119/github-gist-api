import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'gists', loadChildren: () => import('./gists/gists.module').then(m => m.GistsModule) }, { path: '**', redirectTo: 'gists' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
