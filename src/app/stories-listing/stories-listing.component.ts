import { Component, OnInit} from '@angular/core';
import { GetDataService } from  '../services/get-data.service'

@Component({
  selector: 'app-stories-listing',
  templateUrl: './stories-listing.component.html',
  styleUrls: ['./stories-listing.component.css'],
  providers: [GetDataService]
})
export class StoriesListingComponent {
  newdata:any[];
  status:any;
  story_data:any;
  display = false;
  search_text:any;
  search_title:string='';
  constructor(private apiservice: GetDataService){}
  getStories(){
    this.apiservice.getdata().subscribe(res=>{
      const data_to_display:any[]=[]
      res.forEach((element:any)=>{
        let title_here=element.title
        let url=element.url
        let body_text=element.body_text
        if(title_here.includes(this.search_title) || url.includes(this.search_title) || body_text.includes(this.search_title)){
          data_to_display.push(element)
        }
      });
      if(this.search_title === ''){
        this.newdata=res
      }
      else{
        this.newdata=data_to_display;
      }
      console.log("data to be displayed here is ")
      console.log(data_to_display)
      console.log("response is ----")
      console.log(res)
      console.log(typeof(res))
    })
  }
  onDeleteStory(id:number){
    this.apiservice.deleteStory(id).subscribe(()=>this.status = 'Delete successful');
    console.log("delete success")
  }
  onEditStory(story:any){
    console.log("edition performed")
    this.story_data = story
    this.display = !this.display;
  }
  searching(value:string){
    console.log(value)
    this.search_title=value;
    this.getStories()
  }
  ngOnInit(){
    this.getStories()
  }
}
