import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchText:any;
  private subject=new Subject<any>();

  constructor() { }

  setSearchText(text:any):void{
    this.searchText=text;
    this.subject.next(this.searchText);
  }

  getSearchText():Observable<any>{
    return this.subject.asObservable();
  }

}
