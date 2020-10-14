import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ShoppingListComponent} from './shopping_list/shoppingList.component';
import {ShoppingListEditComponent} from './shopping_list/shopping_list_edit/shoppingListEdit.component';
import {RecipeDetailComponent} from './recipe_book/recipe_detail/recipeDetail.component';
import {RecipeItemComponent} from './recipe_book/recipe_item/recipeItem.component';
import {RecipeListComponent} from './recipe_book/recipe_list/recipeList.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
