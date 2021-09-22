import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'picture-of-day', pathMatch: 'full'},
  { path: 'picture-of-day', loadChildren: () => import('./picture-of-day/picture-of-day.module').then(m => m.PictureOfDayModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
