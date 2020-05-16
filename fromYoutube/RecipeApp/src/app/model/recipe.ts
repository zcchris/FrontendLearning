export interface Ingredient {
  ingredient: string;
  measure: string;
}

export interface Instruction {
  instruction: string;
  photo: string;
}

export class Recipe {
  public id: number;
  public title: string;
  public description: string;
  public feeds_this_many: number;
  public preparation_time: number;
  public ingredients: Ingredient[];
  public instructions: Instruction[];
  public cover_photo: string;
  public keywords: string[];

  constructor(
    id: number,
    title: string,
    description: string,
    feeds_this_many: number,
    preparation_time: number,
    ingredients: Ingredient[],
    instructions: Instruction[],
    cover_photo: string,
    keywords: string[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.feeds_this_many = feeds_this_many;
    this.preparation_time = preparation_time;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.cover_photo = cover_photo;
    this.keywords = keywords;
  }

  // no multiple constructors allow
  public static createBlank(): Recipe {
    return new Recipe(
      -1,
      '',
      '',
      0,
      0,
      [{ ingredient: '', measure: '' }],
      [{ instruction: '', photo: '' }],
      '',
      []
    );
  }

  public static recipeFormJSON(obj: any): Recipe {
    return new Recipe(
      obj.id,
      obj.title,
      obj.description,
      obj.feeds_this_many,
      obj.preparation_time,
      obj.ingredients,
      obj.instructions,
      obj.cover_photo,
      obj.keywords
    );
  }
}

export class RecipesPayload {
  error: string;
  data: Recipe[];
}

export class RecipePayload {
  error: string;
  data: Recipe;
}
