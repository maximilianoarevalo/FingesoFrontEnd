import { Component, OnInit } from '@angular/core';
import { DesafioService } from '../shared/desafio/desafio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desafio-save',
  templateUrl: './desafio-save.component.html',
  styleUrls: ['./desafio-save.component.css']
})
export class DesafioSaveComponent implements OnInit {
  
  desafio: any =  {};
  sub: Subscription;
  constructor(private desafioService: DesafioService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.desafioService.get(id).subscribe((desafio: any) => {
          if (desafio) {
            this.desafio = desafio;
            this.desafio.href = desafio._links.self.href;
          } else {
            console.log(`Desafio with id '${id}' not found, returning to list`);
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
    this.desafioService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  















}
