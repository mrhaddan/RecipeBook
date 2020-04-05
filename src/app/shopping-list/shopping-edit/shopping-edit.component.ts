import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) ingredientName: ElementRef;
  @ViewChild('amountInput', {static: false}) ingredientAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickAdd() {
    const theIngredient = new Ingredient(
      this.ingredientName.nativeElement.value,
      this.ingredientAmount.nativeElement.value);

    this.ingredientAdded.emit(theIngredient);
  }
}
