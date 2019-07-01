import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);