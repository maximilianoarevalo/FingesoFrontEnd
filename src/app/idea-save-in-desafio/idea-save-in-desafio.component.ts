import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DesafioService } from '../shared/desafio/desafio.service';
import { IdeaService } from '../shared/idea/idea.service';

@Component({
  selector: 'app-idea-save-in-desafio',
  templateUrl: './idea-save-in-desafio.component.html',
  styleUrls: ['./idea-save-in-desafio.component.css']
})
export class IdeaSaveInDesafioComponent implements OnInit {

  


  desafio: any =  {};
  idea: any =  {};
  sub: Subscription;
  id: any = 0;
  constructor(private ideaService: IdeaService,
    private route: ActivatedRoute,
    private router: Router,private desafioService: DesafioService) { }

    
    ngOnInit() {
      
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
        
      });
      console.log("id: ",this.id)
    }

    gotoList() {
      this.router.navigate(['/desafio-show',this.id]);
    }

    

    save(form: NgForm,id:IDBDatabase){
      this.desafioService.saveIdeaInDesafio(form,id).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }
    
    remove(href) {
      this.desafioService.remove(href).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }



}
