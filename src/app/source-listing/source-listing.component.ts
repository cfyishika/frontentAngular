import { Component, OnInit } from '@angular/core';
import {SourcingService} from '../services/sourcing.service'
import { SourceEditingComponent } from '../source-editing/source-editing.component';
// import { MdbModalRef, MdbModalService} from 'node_modules/mdb-angular-ui-kit-3.0.1/package/modal';
@Component({
  selector: 'app-source-listing',
  templateUrl: './source-listing.component.html',
  styleUrls: ['./source-listing.component.css'],
  providers: [SourcingService]
})
export class SourceListingComponent {
  sources:any;
  status:any;
  source_data:any;
  display=false;
  search_text:any;
  search_title:string='';
  // modalRef: MdbModalRef<SourceEditingComponent> | null = null;

  constructor(private soucingService: SourcingService){}
  // openModal() {
  //   this.modalRef = this.modalService.open(SourceEditingComponent)
  // }
  getSources(){
    this.soucingService.getsource().subscribe(res=>{
      const data_to_display:any[]=[]
      res.forEach((element:any)=>{
        let source_name=element.name
        let source_url=element.url
        if(source_name.includes(this.search_title) || source_url.includes(this.search_title)){
          data_to_display.push(element)
        }
      });
      if(this.search_title === ''){
        this.sources=res
      }
      else{
        this.sources=data_to_display;
      }
      console.log("data to be displayed here is ")
      console.log(data_to_display)
      console.log("response is ----")
      console.log(res)
      console.log(typeof(res))

    })
  }

  onDeleteSource(id:number){
    this.soucingService.deleteSource(id).subscribe(()=>this.status = 'Delete successful');
    console.log("source delete success")
  }
  onEditSource(source:any){
    console.log("source edition performed")
    this.source_data = source
    this.display = !this.display;
  }
  searchingSources(value:string){
   console.log(value)
   this.search_title=value
   this.getSources()
  }
  ngOnInit(){
    this.getSources()
  }
}
