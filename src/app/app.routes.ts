import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { CustomerSignupComponent } from './pages/signup/customer-signup/customer-signup.component';
import { ProviderSignupComponent } from './pages/signup/provider-signup/provider-signup.component';
import { ProductsListComponent } from './commen/products-list/products-list.component';
import { SignUpWithEmailComponent } from './pages/signup/sign-up-with-email/sign-up-with-email.component';

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
        component: SignUpWithEmailComponent
    }
    
];
