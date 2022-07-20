import { Contato } from './contato.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
url = 'assets/contato.json'
listarContato():Observable<any> {
  return this.http.get(this.url)
  }

  adicionarContato() {

  }

  editarContato() {

  }

  removerContato() {

  }

  constructor( private http: HttpClient) { }
}
