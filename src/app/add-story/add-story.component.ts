import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {SourcingService} from '../services/sourcing.service'
import {CompaniesService} from '../services/companies.service'
import { GetDataService } from '../services/get-data.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css'],
  providers:[SourcingService, CompaniesService, GetDataService]
})
export class AddStoryComponent implements OnInit{
  myForm:any;
  sources:any;
  companies:any;
  status:any;
  constructor(private sourcingService: SourcingService, private companyService: CompaniesService, private apiservive: GetDataService,  public activeModal: NgbActiveModal){
    this.createForm()
  }
  public createForm(){
    this.myForm = new FormGroup({
      title: new FormControl(''),
      source_name:new FormControl(''),
      body_text: new FormControl(''),
      pub_date: new FormControl(''),
      url: new FormControl(''),
      tagged_company: new FormControl('')
    })
  }
  ngOnInit(): void{
  this.companies=this.getCompanies()
  this.sources=this.getSources()
}
getSources(){
  this.sourcingService.getsource().subscribe(res=>{
    this.sources=res
    console.log(this.sources)
  })
}
getCompanies(){
  this.companyService.getcompanies().subscribe(res=>{
    this.companies=res
    console.log(this.companies)
  })
}
addStory(new_story:any){
  this.apiservive.addStory(new_story).subscribe(()=>this.status="added successfull");
  this.activeModal.close(new_story)
  console.log(new_story)
  console.log("strooy added successfullyyy !!!!!!!!!!!!")
}

}