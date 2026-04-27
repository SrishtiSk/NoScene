import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./pages/home/home.component')
            .then(m => m.HomeComponent)
    },
    {
        path: 'campus',
        loadComponent: () => import('./pages/campus/campus.component')
            .then(m => m.CampusComponent)
    },
    {
        path:'campus/marketplace',
        loadComponent: () => import('./pages/campus/features/marketplace/marketplace.component')
            .then(m => m.MarketplaceComponent)
    },
    {
        path:'campus/rentals',
        loadComponent: () => import('./pages/campus/features/rentals/rentals.component')
            .then(m => m.RentalsComponent)
    },
    {
        path: 'campus/projects',
        loadComponent: () => import('./pages/campus/features/projects/projects.component')
            .then(m => m.ProjectsComponent)
    },
    {
        path: 'campus/dashboard',
        loadComponent: () => import('./pages/campus/features/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
    },
    {
        path: 'campus/marketplace/:id',
        loadComponent: () =>
            import('./pages/campus/features/marketplace/product-detail/product-detail.component')
                .then(m => m.ProductDetailComponent)
    },
    {
        path:'**',
        loadComponent: () => import('./pages/not-found/not-found.component')
            .then(m => m.NotFoundComponent)
    }

];
