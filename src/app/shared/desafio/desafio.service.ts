import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class DesafioService {

  constructor(private http: HttpClient) { 
  }

  getAll(): Observable<any>{
    return this.http.get('//localhost:8080/desafios/')
  }

  get(id: string) {
   return this.http.get('//localhost:8080/desafios' + '/' + id);
 }

  save(desafio: any): Observable<any> {
   let result: Observable<Object>;
   result = this.http.post('//localhost:8080/desafios/', desafio);
   return result;
 }
   
 remove(href: string) {
   return this.http.delete(href);
 }

 getAllIdeasInDesafio(id){
  return this.http.get('//localhost:8080/ideas'+'/'+id+'/')
 }

 saveIdeaInDesafio(idea: any,id : IDBDatabase): Observable<any> {
  let result: Observable<Object>;

  result = this.http.post('//localhost:8080/desafios/'+id+'/addIdea/', idea);
  return result;
  }

}
