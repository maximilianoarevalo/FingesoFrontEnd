import { Component, OnInit } from '@angular/core';
import {DesafioService} from '../shared/desafio/desafio.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { getMatTooltipInvalidPositionError } from '@angular/material';



@Component({
  selector: 'app-desafio-show',
  templateUrl: './desafio-show.component.html',
  styleUrls: ['./desafio-show.component.css']
})
export class DesafioShowComponent implements OnInit {

  desafio: any = {};
  ideas: any ={};
  sub: Subscription;
  constructor(private desafioService: DesafioService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if(id){
        this.desafioService.get(id).subscribe((desafio: any) =>{
          if(desafio){
            this.desafio = desafio;
            console.log(desafio);
          }
          else{
            console.log('Desafio with id ' + id + 'not found');
            this.goToList();
          }
        });
      }
    });

    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if(id){
        this.desafioService.getAllIdeasInDesafio(id).subscribe(data => {
          this.ideas = data;
        })
      }
    });
  }

  goToList(){
    this.router.navigate(['/desafios-list']);
  }













}
