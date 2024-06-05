import { Component } from '@angular/core';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeItemComponent,CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  itemCount=6;
  items=new Array(this.itemCount);

}
