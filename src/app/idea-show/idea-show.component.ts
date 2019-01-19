import { Component, OnInit } from '@angular/core';
import { IdeaService} from '../shared/idea/idea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { getMatTooltipInvalidPositionError } from '@angular/material';

@Component({
  selector: 'app-idea-show',
  templateUrl: './idea-show.component.html',
  styleUrls: ['./idea-show.component.css']
})
export class IdeaShowComponent implements OnInit {
  idea: any = {};
  comentarios: any ={};
  sub: Subscription;

  constructor(private ideaService: IdeaService,
    private route: ActivatedRoute,
    private router: Router,) {

    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if(id){
        this.ideaService.get(id).subscribe((idea: any) =>{
          if(idea){
            this.idea = idea;
            console.log(idea);
          }
          else{
            console.log('Idea with id ' + id + 'not found');
            this.goToList();
          }
        });
      }
    });

    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if(id){
        this.ideaService.getAllComentariosInIdea(id).subscribe(data => {
          this.comentarios = data;
        })
      }
    });
  }
  goToList(){
    this.router.navigate(['/idea-list']);
  }

  showComentarios()
  {
  this.sub = this.route.params.subscribe(params => {
    const id = params['id'];
    if(id){
      this.ideaService.getAllComentariosInIdea(id).subscribe(data => {
        this.comentarios = data;
      })
    }
  });
  }

}
