import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: MasterLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent

            }
        ]
    },

];
