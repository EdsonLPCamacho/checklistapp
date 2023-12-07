import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,        
        FooterComponent,
        MaterialModule,
        SidenavComponent,
        HeaderComponent,
        RouterModule

    ]
})
export class AppComponent {
[x: string]: any;
 public events: string[] = [];
 public opened: boolean = false;
  
}


