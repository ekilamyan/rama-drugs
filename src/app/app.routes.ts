import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RefillRxComponent } from './refill-rx/refill-rx.component';
import { TransferRxComponent } from './transfer-rx/transfer-rx.component';

export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' }, // Default route
    { path: 'homepage', component: HomepageComponent },
    { path: 'refill-rx', component: RefillRxComponent },
    { path: 'transfer-rx', component: TransferRxComponent },
];
