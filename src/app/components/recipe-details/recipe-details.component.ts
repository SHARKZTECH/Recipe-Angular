import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {

  meal:any;

  constructor(private recipeService:RecipeService){}

  ngOnInit(): void {
    this.recipeService.getRecipeDetail("52885").subscribe(value=>{
      let m=value.meals[0]
      this.meal=m;
      });
    console.log(this.meal)
  }

}
