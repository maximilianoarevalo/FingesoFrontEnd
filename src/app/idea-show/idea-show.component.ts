import { Component, OnInit } from '@angular/core';
import { IdeaService} from '../shared/idea/idea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { getMatTooltipInvalidPositionError } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-idea-show',
  templateUrl: './idea-show.component.html',
  styleUrls: ['./idea-show.component.css']
})
export class IdeaShowComponent implements OnInit {
  idea: any = {};
  comentario = {
    content:""
  };
  sub: Subscription;
  id: any = 0;

  constructor(private ideaService: IdeaService,
    private route: ActivatedRoute,
    private router: Router,) {

    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id){
        this.ideaService.get(this.id).subscribe((idea: any) =>{
          if(idea){
            this.idea = idea;
            console.log(idea);
          }
          else{
            console.log('Idea with id ' + this.id + 'not found');
            this.goToList();
          }
        });
      }
    });

    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if(id){
        this.ideaService.getAllComentariosInIdea(id).subscribe(data => {
          this.comentario = data;
        })
      }
    });
  }

  showComentarioOdds(){
    console.log(this.comentario.content)
    this.ideaService.saveComentarioInsideIdea(this.comentario.content,this.id).subscribe(result => {
      this.goToList();
    }, error => console.error(error));

    this.ideaService.getAllComentariosInIdea(this.id).subscribe(data => {
      this.comentario = data;
    })

  }

  goToList(){
    this.router.navigate(['/idea-show',this.id]);
  }

  /*showcomentario()
  {
  this.sub = this.route.params.subscribe(params => {
    const id = params['id'];
    if(id){
      this.ideaService.getAllComentariosInIdea(id).subscribe(data => {
        this.comentario = data;
      })
    }
  });
  }*/

  comentar(form: NgForm,id:IDBDatabase){

    console.log(id);
    this.ideaService.saveComentarioInsideIdea(form,id).subscribe(result => {
      this.goToList();
    }, error => console.error(error));
  
  }




}
