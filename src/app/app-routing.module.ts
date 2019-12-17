import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  // any  module works it own. they do not communicate with each other -> exports necessary
  exports: [RouterModule]
})
export class AppRoutingModule {
}
