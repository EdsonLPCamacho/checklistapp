import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-sidenav',
    standalone: true,
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.css',
    imports: [
        MaterialModule,
        RouterModule,
        FooterComponent,
        HeaderComponent 
    ]
})
export class SidenavComponent {

}
