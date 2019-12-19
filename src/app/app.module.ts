import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { StuffComponent } from './stuff/stuff.component';
import { StuffDetailComponent } from './stuff/stuff-detail/stuff-detail.component';
import { StuffEditComponent } from './stuff/stuff-edit/stuff-edit.component';
import { StuffListComponent } from './stuff/stuff-list/stuff-list.component';
import { StuffItemComponent } from './stuff/stuff-list/stuff-item/stuff-item.component';
import { StuffStartComponent } from './stuff/stuff-start/stuff-start.component';
import { StuffService } from './stuff/stuff.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    StuffComponent,
    StuffDetailComponent,
    StuffEditComponent,
    StuffListComponent,
    StuffItemComponent,
    StuffStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StuffService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
