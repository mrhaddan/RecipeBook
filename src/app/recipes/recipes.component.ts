import { Recipes } from './recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  theRecipe: Recipes;
  constructor() { }

  ngOnInit(): void {
  }

}
