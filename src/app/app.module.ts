import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesListingComponent } from './stories-listing/stories-listing.component';
import { HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoryEditingComponent } from './story-editing/story-editing.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { SourceListingComponent } from './source-listing/source-listing.component';
import { SourceEditingComponent } from './source-editing/source-editing.component';
import { AddSourceComponent } from './add-source/add-source.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesListingComponent,
    HomeComponent,
    NavbarComponent,
    StoryEditingComponent,
    AddStoryComponent,
    SourceListingComponent,
    SourceEditingComponent,
    AddSourceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-CSRF-TOKEN'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
