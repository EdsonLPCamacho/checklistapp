import { Component, Input } from '@angular/core';
//Angular material
import { MaterialModule } from '../material.module';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
  
})
export class HeaderComponent {
  @Input() sidenav!: MatSidenav;

  openSideNav() {  
    this.sidenav.toggle();  
  }

}
