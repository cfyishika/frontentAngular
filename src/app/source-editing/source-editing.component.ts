import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {SourcingService} from '../services/sourcing.service'
// import { MdbModalRef } from 'node_modules/mdb-angular-ui-kit-3.0.1/package/modal';

@Component({
  selector: 'app-source-editing',
  templateUrl: './source-editing.component.html',
  styleUrls: ['./source-editing.component.css'],
  providers: [SourcingService]
})
export class SourceEditingComponent implements OnInit{
myForm:FormGroup
status:any;
source_edited:any;
id_edited:number;
@Input() particularSource:any;
constructor(private sourcingService: SourcingService){}
ngOnInit():void{
  this.myForm=new FormGroup({
    name: new FormControl(''),
    url: new FormControl('')
  })
}
// getDataFromSource(id:number,particularSource:any){
// this.id_edited=id;
// this.source_edited=particularSource
// console.log(this.source_edited)
// console.log(this.id_edited)
// }
editSource(id:number, particularSource:any){
  console.log("source editing to be performed")
  this.sourcingService.updateSource(id,particularSource).subscribe(()=>this.status = "source update succeddful")
  console.log("update success")
}
}
