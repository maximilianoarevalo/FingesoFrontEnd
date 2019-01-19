import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../shared/idea/idea.service';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {
  ideas: Array<any>;
  titulo: string;
  constructor(private ideaService: IdeaService) { }

  getIdeaByTitle()
  {
    this.ideaService.getAllIdeasBuscadasByNombre(this.titulo).subscribe
    (data => 
      { this.ideas = data;}
      )
  }

  ngOnInit() {
    this.ideaService.getAll().subscribe(data => {
      this.ideas = data;
    });
  }

}
