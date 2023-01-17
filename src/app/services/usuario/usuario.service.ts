import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_SERVER = "http://localhost:4000/api/users";

  constructor(private httpClient: HttpClient) { }

  public listarUsuarios(){
    return this.httpClient.get(this.API_SERVER);
  }

  public crearUsuario(user:any){
    return this.httpClient.post(this.API_SERVER, user);
  }
}
