import { Injectable } from '@angular/core';
import { Recipe, RecipesPayload } from 'src/app/model/recipe';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { RecipePayload } from '../model/recipe';
import { throwError } from 'rxjs';

const RECIPE_SERVER = 'http://localhost:4200';

// dependency injection
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  httpOptions: object;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  // below are service APIs
  getAllRecipes(): Observable<RecipesPayload> {
    return this.http
      .get<RecipesPayload>(RECIPE_SERVER + '/v1/recipes.json')
      .pipe(catchError(this.handleError));
  }

  getRecipeById(recipe_id: number): Observable<RecipePayload> {
    if (recipe_id === undefined) {
      console.log('There is an error');
      return;
    }

    return this.http
      .get<RecipePayload>(RECIPE_SERVER + '/v1/recipes/' + recipe_id + '.json')
      .pipe(catchError(this.handleError));
  }

  // addRecipe takes the RECIPE_SERVE and recipe data put and tell the http server how we store the data (which needs the headers)
  addRecipe(recipe: Recipe): Observable<RecipePayload> {
    return this.http.put<RecipePayload>(
      RECIPE_SERVER + '/v1/recipes.json',
      recipe,
      this.httpOptions
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // backend returned an unsuccessful response code.
      // the response body may contain clues as to what went wrong.
      console.error(
        JSON.stringify(error, null, 2) +
          `Backend return code ${error.status},` +
          `body was: ${error.error}`
      );
    }
    // return observable with a user-facing error message
    return throwError(error.error);
  }
}
