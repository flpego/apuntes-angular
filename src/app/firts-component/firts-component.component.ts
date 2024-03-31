import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firts-component',
  templateUrl: './firts-component.component.html',
  styleUrl: './firts-component.component.css'
})
export class FirtsComponentComponent {

  title:string = "mi primer componente";
  name:string = "Clark"
  age: number = 17;

  count:number = 0;

  incrementCount() {
    this.count++;
    if(this.count === 11){
      this.count = 0;
    }
  }

  decreaseCount() {
    this.count--;
  }

  ngOnInit() {

  }
  ageVerification() {
    if(this.age >= 18){
      alert("Puede ingresar");
    }else{
      alert("No Puede ingresar");
    }
  }



}
