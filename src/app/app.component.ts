import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'recipe';

  itemCount=6;
  items=new Array(this.itemCount);

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      // Flowbite code that interacts with the DOM 
      initFlowbite();
    }  }
}
