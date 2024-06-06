import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  text: string="";

  constructor(private searchService:SearchService){}
  ngOnInit(): void { }
  onTextChange(newText: string) {
    this.text = newText;
    this.searchService.setSearchText(this.text);
  }

  

}
