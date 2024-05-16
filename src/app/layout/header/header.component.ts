import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzDemoDropdownBasicComponent } from '../../components/drop-down.component';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterOutlet, NzDemoDropdownBasicComponent],
    animations: [
        trigger('menuAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateX(100%)' }),
                animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
            ]),
            transition(':leave', [
                animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(100%)' }))
            ])
        ])
    ]
})
export class HeaderComponent {
    menuItems: string[] = ['خانه', 'درباره ما', 'خدمات', 'تماس با ما', 'بلاگ'];
    menuOpen: boolean = false;

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen;
    }

    handleMouseEnter(): void {
        this.menuOpen = true; // باز شدن منو با هاور
    }

    handleMouseLeave(): void {
        this.menuOpen = false; // بسته شدن منو هنگام خروج از هاور
    }
}

