export interface Instruction { // contract of what data type of field just like in java
    instruction: string;
    photo: string;
}
export interface Ingredient {
    measure: string;
    photo: string;
}

export class Recipe {
    public title: string;
    public description: string;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public cover_photo: string;
    // not visible even to set the field in the value object
    private _secretIngredient: string; 
    public prepTime: number;
    public feedsThisMany:  number;

    //Same as Java constructor
    public constructor(t: string, d: string, ing: Ingredient[]
        , ins: Instruction[], coverpic: string,prepTime: number, feedsThisMany:  number){
        this.title = t;
        this.description = d;
        this.ingredients = ing;
        this.instructions = ins;
        this.cover_photo = coverpic;
        this.prepTime = prepTime;
        this.feedsThisMany = feedsThisMany;
    }
}


