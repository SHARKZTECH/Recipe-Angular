import { Component, Input } from '@angular/core';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [RecipeDetailsComponent],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

  @Input() meal:any;

}
