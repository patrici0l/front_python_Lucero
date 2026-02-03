import { Component } from '@angular/core';
import { VehiculosComponent } from './vehiculos/vehiculos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VehiculosComponent],
  templateUrl: './app.html'
})
export class App {}
