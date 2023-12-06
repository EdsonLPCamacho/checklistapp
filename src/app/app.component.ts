import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',    
    imports: [
      CommonModule, 
      RouterOutlet, 
      HeaderComponent, 
      FooterComponent,
      MaterialModule
    
    ]
})
export class AppComponent {
[x: string]: any;
 public events: string[] = [];
 public opened: boolean = false;
}
