import { Component } from '@angular/core';
import { users } from '../data/users.data.js';
@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css',
})
export class DirectivasComponent {
  value1 = true;

  error = false;

  changeValue1() {
    return this.value1 = !this.value1;
  }
  // directivas estructurales
  show = false;
  users = users;
  stateArr = ['en-preparacion','en-camino', 'entregado' ];
  state: 'en-camino' | 'entregado' | 'en-preparacion' = 'en-preparacion';
  onChangeState(ev: Event) {
    const el = ev.target as HTMLSelectElement;
    const val = el.value as 'en-camino' | 'entregado' | 'en-preparacion';
    this.state = val;
  }

  color: 'blue' | 'red' | 'white' | 'green' = 'blue';

  onSelectChange(ev: Event) {
    console.log(ev);
    const el = ev.target as HTMLSelectElement;
    const val = el.value as 'blue' | 'red' | 'white' | 'green';
    this.color = val;
  }

  titleLong =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, facilis aliquam illum quo ullam, repudiandae quod eveniet assumenda sit sed in blanditiis nobis dolore maiores, quas natus amet tenetur accusamus!';

  dateNow = new Date();
}
