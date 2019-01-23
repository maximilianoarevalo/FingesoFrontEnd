import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get('//localhost:8080/comentarios/')
  }

  save(comentario: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post('//localhost:8080/comentarios/', comentario);
    return result;
  }

  

  remove(href: string) {
    return this.http.delete(href);
  }
}
