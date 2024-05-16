import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';


@Component({
    selector: 'app-master-layout',
    templateUrl: './master-layout.component.html',
    styleUrls: ['./master-layout.component.scss'],
    standalone: true,
    imports: [HeaderComponent, RouterOutlet, FooterComponent],
    providers: [],
})
export class MasterLayoutComponent implements OnInit {
    constructor() { }
    ngOnInit(): void { }
}
