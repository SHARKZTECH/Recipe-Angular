import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './components/recipes/recipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,CommonModule,RecipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'recipe';

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      // Flowbite code that interacts with the DOM 
      initFlowbite();
    }  }
}
