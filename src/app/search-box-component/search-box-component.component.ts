import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { YoutubeService } from './../youtube/youtube.service';
import { SearchResult } from './../youtube/search-result';
import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-box-component',
  templateUrl: './search-box-component.component.html',
  styleUrls: ['./search-box-component.component.css']
})
export class SearchBoxComponentComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YoutubeService, private el: ElementRef) { }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.emit(true))
      .map((query: string) => this.youtube.search(query))
      .switch()
      .subscribe((results: SearchResult[]) => {
        this.loading.emit(false);
        this.results.emit(results)
      }, (err) => {
        console.log(err);
        this.loading.emit(false);
      },
    () => this.loading.emit(false));

  }

}
