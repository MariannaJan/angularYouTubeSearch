import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { YoutubeService } from './youtube/youtube.service';
import { SearchBoxComponentComponent } from './search-box-component/search-box-component.component';
import { SearchResultComponentComponent } from './search-result-component/search-result-component.component';
import { YoutubeSearchComponentComponent } from './youtube-search-component/youtube-search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponentComponent,
    SearchResultComponentComponent,
    YoutubeSearchComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
