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
import { DesafioListComponent } from './desafio-list/desafio-list.component';
import { DesafioSaveComponent } from './desafio-save/desafio-save.component';
import { IdeaShowComponent } from './idea-show/idea-show.component';
import { DesafioShowComponent } from './desafio-show/desafio-show.component';
import { IdeaSaveInDesafioComponent } from './idea-save-in-desafio/idea-save-in-desafio.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaListComponent,
    IdeaSaveComponent,
    NavbarComponent,
    DesafioListComponent,
    DesafioSaveComponent,
    IdeaShowComponent,
    DesafioShowComponent,
    IdeaSaveInDesafioComponent,
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
