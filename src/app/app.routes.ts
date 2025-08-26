import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { CustomerSignupComponent } from './pages/signup/customer-signup/customer-signup.component';
import { ProviderSignupComponent } from './pages/signup/provider-signup/provider-signup.component';
import { ProductsListComponent } from './commen/products-list/products-list.component';
import { SignUpWithEmailComponent } from './pages/signup/sign-up-with-email/sign-up-with-email.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminRootComponent } from './pages/admin/admin-root/admin-root.component';
import { GuestRootComponent } from './pages/guest/guest-root/guest-root.component';
import { GuestDashboardComponent } from './pages/guest/guest-dashboard/guest-dashboard.component';
import { HostRootComponent } from './pages/host/host-root/host-root.component';
import { HostDashboardComponent } from './pages/host/host-dashboard/host-dashboard.component';
import { DeactivateGuardService } from './services/guards/deactivateGuardService';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        children: [
            {   
                path:'products',
                component:ProductsListComponent
            }
        ]
    },
    {
        path:'login',
        component:LoginPageComponent
    },
    {
        path:'signup',
        component:CustomerSignupComponent,
        children:[
            {
                path:'signup-as-guest',
                component:CustomerSignupComponent
            },
            {
                path:'signup-as-host',
                component:ProviderSignupComponent
            }
        ]
    },
    {
        path: 'signup-with-email/:userEmail',
        component: SignUpWithEmailComponent,
        canDeactivate:[DeactivateGuardService]
    },
    {
        path:'admin',
        component:AdminRootComponent,
        children:[
            {
                path:'dasboard',
                component:AdminDashboardComponent
            }
        ]
    },
    {
        path:'guest',
        component:GuestRootComponent,
        children:[
            {
                path:'dashboard',
                component:GuestDashboardComponent
            }

        ]
    },
    {
        path:'host',
        component:HostRootComponent,
        children:[
            {
                path:'dashboard',
                component:HostDashboardComponent
            }
        ]
    }
    
    
];
