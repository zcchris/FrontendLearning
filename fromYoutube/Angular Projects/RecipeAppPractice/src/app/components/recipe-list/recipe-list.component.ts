import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  load_error: any;
  recipes_loaded: boolean;
  recipes: Recipe[];

  // construction supposed to set up thing quickly, instead of making a network call or requesting resource
  constructor(private router: Router, private recipe_service: RecipeService) {}

  // start to construct web page and make network request
  ngOnInit() {
    this.recipe_service.getAllRecipes().subscribe(
      (recipespayload) => {
        this.recipes = recipespayload.data;
        this.recipes_loaded = true;
        console.log(recipespayload.error);
      },
      (error) => {
        this.load_error = error;
        console.log(JSON.stringify(error, null, 2));
      }
    );
  }

  recipeClicked(recipe_id): void {
    this.router.navigateByUrl('/recipes/' + recipe_id);
  }

  addNewRecipeClicked(): void {
    this.router.navigateByUrl('/editnewrecipe');
  }
}
