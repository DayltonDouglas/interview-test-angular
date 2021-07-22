import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpCliente: HttpClient) { }

  autenticar(usuario: string, senha: string): Observable<any>{
    return this.httpCliente.post('http://localhost:4200/user/login',{
      userName: usuario,
      password: senha,
    })
  }
}
