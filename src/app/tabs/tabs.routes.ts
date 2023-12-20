import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

export const routes : Routes = [
  {
    path: '',
    component: TabsPage,
    children:[

      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      }
    ]

  }
];
