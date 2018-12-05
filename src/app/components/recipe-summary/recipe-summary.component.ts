import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';


@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent  {

  @Input()
  recipe: Recipe

  @Output()
  zoomIn :  EventEmitter<Recipe> = new EventEmitter();
  constructor(){}

  public zoomInClick (){
    console.log('zoomInClicked');
    this.zoomIn.emit(this.recipe);
  }
}
