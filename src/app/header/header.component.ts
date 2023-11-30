import { Component } from '@angular/core';
//Angular material
import { MaterialComponent } from '../material.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MaterialComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
  
})
export class HeaderComponent {
openSideNav() {
throw new Error('Method not implemented.');
}

}
