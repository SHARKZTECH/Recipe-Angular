import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeItemComponent,CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  
  itemCount=8;
  items=new Array(this.itemCount);

  recipes:any=[];

  constructor(private recipeService:RecipeService){}
  
  ngOnInit(): void {
    this.recipeService.getRecipes("").subscribe(rec=>this.recipes.push(rec.meals[0]));
  }

}
