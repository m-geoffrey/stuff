import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuffComponent } from './stuff/stuff.component';
import { AuthComponent } from './auth/auth.component';
import { StuffStartComponent } from './stuff/stuff-start/stuff-start.component';
import { StuffDetailComponent } from './stuff/stuff-detail/stuff-detail.component';
import { StuffEditComponent } from './stuff/stuff-edit/stuff-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/stuff', pathMatch: 'full' },
  { path: 'stuff', component: StuffComponent, children: [
      { path: '', component: StuffStartComponent },
      { path: 'new', component: StuffEditComponent },
      { path: ':id', component: StuffDetailComponent },
      { path: ':id/edit', component: StuffEditComponent },
    ] },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
