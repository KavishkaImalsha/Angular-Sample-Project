import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { NotFound } from './components/not-found/not-found';
import { ConditionalFlow } from './components/conditional-flow/conditional-flow';

export const routes: Routes = [
    //Map default route
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login //component class name
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'conditions',
        component: ConditionalFlow
    },
    //Path is not found show like
    {
        path: '**',
        component: NotFound
    }
];
