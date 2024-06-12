import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShoulderbagComponent } from './shoulderbag/shoulderbag.component';
import { BagpacksComponent } from './bagpacks/bagpacks.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyAccountComponent } from './my-account/my-account.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'shop', component:ShopComponent},
    {path: 'shoulderbag', component:ShoulderbagComponent},
    {path: 'backpack', component:BagpacksComponent},
    {path: 'contactus', component:ContactusComponent},
    {path: 'app-my-account', component:MyAccountComponent }
    
  ];