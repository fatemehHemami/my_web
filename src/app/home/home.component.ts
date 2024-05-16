import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [],
    providers: [],
})
export class HomeComponent implements OnInit {
    constructor() { }
    ngOnInit(): void { }
    name: string = 'Angular User';
    title = 'My Web Site';


}
