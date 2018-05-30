import { SearchResult } from './../youtube/search-result';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-component',
  templateUrl: './search-result-component.component.html',
  styleUrls: ['./search-result-component.component.css']
})
export class SearchResultComponentComponent implements OnInit {

  @Input() result: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
