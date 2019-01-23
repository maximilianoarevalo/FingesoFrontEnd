import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../shared/idea/idea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-idea-save',
  templateUrl: './idea-save.component.html',
  styleUrls: ['./idea-save.component.css']
})
export class IdeaSaveComponent implements OnInit {

  idea: any =  {};
  sub: Subscription;
  constructor(private ideaService: IdeaService,
    private route: ActivatedRoute,
    private router: Router,) { 

    }

    ngOnInit() {

      this.sub = this.route.params.subscribe(params => {
        const id = params['id'];
        if (id) {
          this.ideaService.get(id).subscribe((idea: any) => {
            if (idea) {
              this.idea = idea;
              this.idea.href = idea._links.self.href;
            } else {
              console.log(`Idea with id '${id}' not found, returning to list`);
              this.gotoList();
            }
          });
        }
      });
    }

    gotoList() {
      this.router.navigate(['/desafio-list']);
    }

    save(form: NgForm){
      this.ideaService.save(form).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }
    
    remove(href) {
      this.ideaService.remove(href).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }

}
