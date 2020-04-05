import { Recipes } from './../recipes.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipes>();

  recipes: Recipes[] = [
    new Recipes('Taco', 'taco shell, meat, cheese',
    `https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/799px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg`),
    new Recipes('Burrito', 'tortilla, beans, meat, cheese',
    `https://www.chipotle.com/content/dam/chipotle/global-site-design/en/menu/meal-types/burrito/burrito.png`)

  ];
  constructor() { }

  ngOnInit(): void {
  }
  onSelectedRecipe(recipe: Recipes) {
    console.log('recipe-list.component: ' + recipe.name);
    this.recipeSelected.emit(recipe);
  }

}
