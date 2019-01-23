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

  getIdeaByTitle(nombre: string)
  {

    if (nombre === "undefined") {
      
      this.ideaService.getAllIdeasBuscadasByNombre("a").subscribe
      (data => 
      { this.ideas = data;}
      )

    }else{

      this.ideaService.getAllIdeasBuscadasByNombre(nombre).subscribe
      (data => 
        { this.ideas = data;}
        )
    }
  }

  ngOnInit() {
    this.ideaService.getAll().subscribe(data => {
      this.ideas = data;
    });
  }

}
