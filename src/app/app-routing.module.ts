import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaSaveComponent } from './idea-save/idea-save.component';
import { IdeaShowComponent } from './idea-show/idea-show.component';
import { DesafioListComponent } from './desafio-list/desafio-list.component';
import { DesafioSaveComponent } from './desafio-save/desafio-save.component';
import { IdeaSearchComponent } from './idea-search/idea-search.component';


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
    {
        path: 'idea-search',
        component: IdeaSearchComponent
    },
    { path: '', redirectTo: '/desafio-list', pathMatch: 'full'},
    {
        path: 'desafio-list',
        component: DesafioListComponent
    },
    {
        path: 'desafio-save',
        component: DesafioSaveComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }