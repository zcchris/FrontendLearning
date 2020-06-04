import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css'],
})
export class EditNewRecipeComponent implements OnInit {
  disable_add_recipe_btn: boolean;
  recipe_in_progress: Recipe;
  // recipes: [];
  constructor(private router: Router, private recipe_service: RecipeService) {
    this.recipe_in_progress = Recipe.createBlank();
    this.disable_add_recipe_btn = true;
  }

  ngOnInit(): void {}

  addRecipeClicked(): void {
    this.recipe_service
      .addRecipe(this.recipe_in_progress)
      .subscribe((recipepayload) => {
        this.router.navigate(['/recipes', recipepayload.data.id]);
      });
  }

  addIngredientPressed(): void {
    if (!this.recipe_in_progress.ingredients) {
      this.recipe_in_progress.ingredients = [
        { ingredient: null, measure: null },
      ];
    } else {
      this.recipe_in_progress.ingredients.push({
        ingredient: null,
        measure: null,
      });
    }

    this.validateForm();
  }
  addInstructionPressed(): void {
    if (!this.recipe_in_progress.instructions) {
      this.recipe_in_progress.instructions = [
        { instruction: null, photo: null },
      ];
    } else {
      this.recipe_in_progress.instructions.push({
        instruction: null,
        photo: null,
      });
    }
    this.validateForm();
  }
  removeIngredientAtIndex(index: number): void {
    this.recipe_in_progress.ingredients.splice(index, 1);
    this.validateForm();
  }

  removeInstructionAtIndex(index: number): void {
    this.recipe_in_progress.instructions.splice(index, 1);
    this.validateForm();
  }

  validateForm(): void {
    this.disable_add_recipe_btn = true;

    if (
      !this.recipe_in_progress.title.length ||
      !this.recipe_in_progress.description.length
    ) {
      return;
    }

    const preparetion_time = parseInt(
      '' + this.recipe_in_progress.preparation_time,
      10
    );

    const feeds_this_many = parseInt(
      '' + this.recipe_in_progress.feeds_this_many,
      10
    );

    if (isNaN(preparetion_time) || preparetion_time < 1) {
      return;
    }

    if (
      isNaN(feeds_this_many) ||
      feeds_this_many < 1 ||
      feeds_this_many > 100
    ) {
      return;
    }

    // console.log(this.recipe_in_progress.ingredients);

    for (const ing of this.recipe_in_progress.ingredients) {
      if (!ing.ingredient || !ing.ingredient.length) {
        return;
      }
      if (!ing.measure || !ing.measure.length) {
        return;
      }
    }

    for (const inst of this.recipe_in_progress.instructions) {
      if (!inst.instruction || !inst.instruction.length) {
        return;
      }
    }

    // user fails the validation, add new recipe btn is disabled
    this.disable_add_recipe_btn = false;
  }
}
