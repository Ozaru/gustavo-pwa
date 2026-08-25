import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CapoeiraComponent } from './capoeira/capoeira.component';

@Component({
  selector: 'app-root',
  imports: [
    CapoeiraComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
