import { Component, OnInit } from '@angular/core';
import { tipado, ejemplos } from '../data/afterClasTs.data';
import { User} from '../models/user.model'
@Component({
  selector: 'app-af-class-ts',
  templateUrl: './af-class-ts.component.html',
  styleUrl: './af-class-ts.component.css',
})
export class AfClassTsComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  tipado = tipado;
  ejemplos = ejemplos;
  user1: User = new User ( "juan", "juan@g.com",  false, "12345" );

  createUser(){
    this.user1 = new User ( "juan", "juan@g.com",  false, "12345" )
    return this.user1;
  }
  hasChangePass() {
    let newPass:string = prompt("introduce nuevo nombre") || "Vuelve a intentarlo"
    this.user1.changeName(newPass); 
  }
}
