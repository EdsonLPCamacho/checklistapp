import { Component } from '@angular/core';
import { MaterialComponent } from '../material.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MaterialComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public copywrite = 'Developer: Edson Camacho'
}
