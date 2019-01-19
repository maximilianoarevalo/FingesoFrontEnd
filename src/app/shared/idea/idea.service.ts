import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  constructor(private http: HttpClient) {
   }

   getAll(): Observable<any>{
     return this.http.get('//localhost:8080/ideas/')
   }

   get(id: string) {
    return this.http.get('//localhost:8080/ideas' + '/' + id);
  }

   save(idea: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post('//localhost:8080/ideas/', idea);
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

  getAllIdeasBuscadasByNombre(nombre: string): Observable<any>{
    return this.http.get('//localhost:8080/ideas/buscar/'+nombre);
  }
  getAllComentariosInIdea(id: string): Observable<any>{
    return this.http.get('//localhost:8080/ideas'+'/'+id+'/comentarios');
  }

}
