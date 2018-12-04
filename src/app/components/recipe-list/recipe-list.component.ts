import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  {

  recipes: Recipe[];
  constructor(){
    this.recipes = [new Recipe('Banana Bread', 'My Favorite Banana bread recipe!I had'
    +' this once in starbucks in a Minneapolis trip and from that moment'
    +' it has become my favorite.',null,null,null),
    new Recipe('Japanese Sushi', 'Had this in a Downtown restaurant '+
    'in Omaha and it is good.',null,null,null),
    new Recipe('Mutton Haleem', 'Had this in a SACFO fellowship dinner and it tasted really good.'+
    ' Heard its made by Sahyad ',null,null,null)]
  }
}
