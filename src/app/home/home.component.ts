import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private modalService: NgbModal){}
  openFormModal(){
    const modalRef = this.modalService.open(FormModalComponent);
    modalRef.componentInstance.id=10
    modalRef.result.then((result)=>{
      console.log(result);
    }).catch((error)=>{
      console.log(error);
    })
  }
}
