import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Recipe, RecipePayload } from 'src/app/model/recipe';
import { Location } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe_loaded: boolean;
  load_error: any;
  recipe: Recipe;

  // constructor(private route: ActivatedRoute) {} // dependency injection
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recipe_service: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const recipe_id = parseInt(params.get('recipe_id'), 10);

      this.recipe_service.getRecipeById(recipe_id).subscribe(
        (recipepayload) => {
          this.recipe = recipepayload.data;
          this.recipe_loaded = true;

          console.log(recipepayload.error);
        },
        (error) => {
          this.load_error = error;
          console.log(JSON.stringify(error, null, 2));
        }
      );
    });
  }

  gobackButtonClick() {
    this.location.back(); // 这么简单？？？
  }
}
