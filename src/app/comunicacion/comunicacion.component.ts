import { Component, Input } from '@angular/core';
import { ITeacher } from '../models';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrl: './comunicacion.component.css',
})
export class ComunicacionComponent {
  @Input()
  teacher: ITeacher[] = [];
}
