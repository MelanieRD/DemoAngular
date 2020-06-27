import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsProductsComponent } from './products/details-products/details-products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {ProductListComponent} from './products/product-list/product-list.component';


const routes: Routes = [
  //Aqui colocamos las rutas... en caso de que el usuario no le de click a nada
  // le saldra la componente HomePage. en caso de que le de a click products
  // ira a la componente de products, todas estas componentes se importan
  //arriba, aqui el visual code lo hace automaticamente, en otro caso
  //hay que hacerlo manual
  {path:"", component: HomePageComponent},
  {path:"products", component: ProductListComponent},
  {path:"product/:id", component:DetailsProductsComponent},
  {path:"**", component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
