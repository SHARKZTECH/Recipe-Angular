import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeItemComponent,CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
 
  searchMsg:any="";

  recipes=[];

  constructor(private recipeService:RecipeService,private searchService:SearchService){
    this.searchService.getSearchText().subscribe(value=>{
      this.recipeService.getRecipes(value).subscribe(data=>{
        this.recipes=data.meals;
      });
    }) 
   }
  
  ngOnInit(): void {
    this.recipeService.getRecipes(this.searchMsg).subscribe(data=>{
      this.recipes=data.meals;
    });
  }

}


