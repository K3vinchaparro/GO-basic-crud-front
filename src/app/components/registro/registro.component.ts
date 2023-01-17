import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarios!:any;

  public user = {
    first_name : '',
    last_name : '',
    email : ''
  } 


  constructor(private usuarioService: UserService) { }

  ngOnInit(): void {

    this.usuarioService.listarUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, err => {
      console.log(err);
    })

  }

  enviarUsuario(){
    this.usuarioService.crearUsuario(this.user).subscribe(data => {
      window.location.reload()
    }, err => {
      alert("El email ya existe");
      console.log(err);
    })

  }



}
