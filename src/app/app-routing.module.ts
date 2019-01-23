import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaSaveComponent } from './idea-save/idea-save.component';
import { IdeaShowComponent } from './idea-show/idea-show.component';
import { DesafioListComponent } from './desafio-list/desafio-list.component';
import { DesafioSaveComponent } from './desafio-save/desafio-save.component';
import { DesafioShowComponent } from './desafio-show/desafio-show.component';
import { IdeaSaveInDesafioComponent } from './idea-save-in-desafio/idea-save-in-desafio.component';



const routes: Routes = [
    { path: '', redirectTo: '/idea-list', pathMatch: 'full'},
    {
        path: 'idea-list',
        component: IdeaListComponent
    },
    {
        path: 'idea-save',
        component: IdeaSaveComponent
    },
    {
        path: 'idea-show/:id', component: IdeaShowComponent
    },
    { path: '', redirectTo: '/desafio-list', pathMatch: 'full'},
    {
        path: 'desafio-list', component: DesafioListComponent
    },
    {
        path: 'desafio-save', component: DesafioSaveComponent
    },
    {
        path: 'desafio-show/:id', component: DesafioShowComponent
    }, 
    {
        path: 'idea-save-in-desafio/:id', component: IdeaSaveInDesafioComponent
    }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }