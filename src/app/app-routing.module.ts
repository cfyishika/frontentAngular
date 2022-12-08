import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesListingComponent } from './stories-listing/stories-listing.component';
import {AddStoryComponent} from './add-story/add-story.component'
import { HomeComponent } from './home/home.component';
import { SourceListingComponent } from './source-listing/source-listing.component';
import { AddSourceComponent } from './add-source/add-source.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'stories_listing', component: StoriesListingComponent },
  {path: 'story_adding', component:AddStoryComponent },
  {path: 'source_listing',component: SourceListingComponent},
  {path: 'source_adding',component:AddSourceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
