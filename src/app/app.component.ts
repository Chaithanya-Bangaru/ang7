import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'rcb-app-root',
  //template: `  <h1>
  //This is the Recipe app
  //</h1>
  //`,
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Recipe App';
  recipe: Recipe;
  constructor(){
    this.recipe = new Recipe('Banana Bread', 'My Favorite Banana bread recipe',null,null,null);
  }
}
