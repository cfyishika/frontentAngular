import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetDataService } from  '../services/get-data.service'
import {CompaniesService} from '../services/companies.service'
@Component({
  selector: 'app-story-editing',
  templateUrl: './story-editing.component.html',
  styleUrls: ['./story-editing.component.css'],
  providers: [GetDataService]
})
export class StoryEditingComponent implements OnInit{
 myForm: FormGroup;
 @Input() particularStory:any;
 @Output() pass_data=new EventEmitter()
 status:any;
 companies:any;
 constructor(private apiservice: GetDataService, private companyService: CompaniesService){}
 ngOnInit(): void{
   let now=new Date()
   this.myForm = new FormGroup({
     title: new FormControl(''),
     pub_date: new FormControl(''),
     source_name:new FormControl(''),
     description: new FormControl(''),
     url: new FormControl(''),
     tagged_company:new FormControl('')
   })

 }
//  editingStories(){
//    this.pass_data.emit(this.particularStory)
//    console.log("submitted")
//  }
editStory(id:number,particularStory:any){
  this.apiservice.updateStory(id,particularStory).subscribe(()=>this.status = "update succeddful")
  console.log("update success")
}
getCompanies(){
  this.companyService.getcompanies().subscribe(res=>{
    this.companies=res
    console.log(this.companies)
  })
}
}
