import { Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SourcingService} from '../services/sourcing.service'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-source',
  templateUrl: './add-source.component.html',
  styleUrls: ['./add-source.component.css'],
  providers:[SourcingService]
})
export class AddSourceComponent implements OnInit{
myForm:any;
status:any;
constructor(private sourcingService: SourcingService, public activeModal: NgbActiveModal){
  this.createForm();
}
@Input() public source_passed:any;
public createForm(){
  this.myForm = new FormGroup({
    name:new FormControl('', [Validators.required]),
    url:new FormControl('',[Validators.required])
  })
}

addSource(get_source:any,new_source:any){
  if(get_source==null){
    console.log("I have to check the added source", new_source)
    this.sourcingService.addSource(new_source).subscribe(()=>this.status="source added successfull");
  }
  else{
    let id=get_source.id
    this.sourcingService.updateSource(id,get_source).subscribe(()=>this.status = "source update succeddful")
    console.log("I have to check the edited source", new_source)
  }
  // this.sourcingService.addSource(new_source).subscribe(()=>this.status="source added successfull");
  this.activeModal.close("operation performed successfully")
  // console.log(new_source)
  // console.log("showing the id we have passed----",this.source_passed)
  // alert("Source added successfully")
  // console.log("source added successfullyyy !!!!!!!!!!!!")
  
}

rssCheck(url_checked:any){
  let arr=url_checked.split('.');
  arr.forEach((element:any) => {
    if(element=='cms' || element=='xml'){
      return true
    }
    else{
      return false
    } 
  });
}

ngOnInit(){
  console.log("on init  --- id is ",this.source_passed);
}

}
