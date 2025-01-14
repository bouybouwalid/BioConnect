import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { CartComponent } from './components/orders/cart/cart.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventDetailsComponent } from './components/events/event-details/event-details.component';
import { EventFormComponent } from './components/events/event-form/event-form.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AssociationListComponent } from './components/associations/association-list/association-list.component';
import { AssociationDetailsComponent } from './components/associations/association-details/association-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/new', component: ProductFormComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/:id', component: OrderDetailsComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'events/new', component: EventFormComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'articles/:id', component: ArticleDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'associations', component: AssociationListComponent },
  { path: 'associations/:id', component: AssociationDetailsComponent },
  { path: '**', component: NotFoundComponent },

];
