import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../shared/idea/idea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {
  comentarios: any;
  sub: Subscription;
  idIdea: string;

  constructor(private ideaService: IdeaService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idIdea = params['id'];
    });
    this.ideaService.getAllComentariosInIdea(this.idIdea).subscribe(data=>{
      this.comentarios = data;
    });
  }

}
