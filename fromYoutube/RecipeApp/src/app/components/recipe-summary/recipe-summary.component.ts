import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css'],
})
export class RecipeSummaryComponent {
  @Input()
  recipe: Recipe;

  // output event: zoomIn
  // @Output()
  // zoomIn: EventEmitter<Recipe> = new EventEmitter();

  @Output()
  recipeClicked: EventEmitter<number> = new EventEmitter();

  constructor() {}

  // fileZoomInEvent() {
  //   this.zoomIn.emit(this.recipe);
  // }
  userClickedOnRecipe(): void {
    this.recipeClicked.emit(this.recipe.id);
  }
}
