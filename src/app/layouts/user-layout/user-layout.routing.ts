import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { BookingHistoryComponent } from '../../pages/booking-history/booking-history.component'

export const UserLayoutRoutes: Routes = [
    
    { path: 'available-shelves',  component: TablesComponent },
    { path: 'booking-history',  component: BookingHistoryComponent },
    {path: 'user-profile', component: UserProfileComponent},
    {
        path: '',
        redirectTo: 'available-shelves',
        pathMatch: 'full',
    }
];
