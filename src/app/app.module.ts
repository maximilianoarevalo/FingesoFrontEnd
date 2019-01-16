import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IdeaService } from './shared/idea/idea.service';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { AppRoutingModule } from './app-routing.module';
import { IdeaSaveComponent } from './idea-save/idea-save.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaListComponent,
    IdeaSaveComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
