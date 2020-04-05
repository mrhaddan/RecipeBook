import { Recipes } from './../../recipes.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeThing: Recipes;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {

  }

  ngOnInit(): void {

  }

  selectedRecipe() {
    this.recipeSelected.emit();
  }

}
