import { SearchResult } from './../youtube/search-result';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-youtube-search-component',
  templateUrl: './youtube-search-component.component.html',
  styleUrls: ['./youtube-search-component.component.css']
})
export class YoutubeSearchComponentComponent implements OnInit {

  results: SearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }

}
