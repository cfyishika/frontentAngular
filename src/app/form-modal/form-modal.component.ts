import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {
constructor(public activeModal: NgbActiveModal){
  this.createForm();
}
@Input() id:number;
myForm: FormGroup;
private createForm(){
  this.myForm = new FormGroup({
    username:new FormControl('', [Validators.required]),
    password:new FormControl('',[Validators.required])
  })
}
submitForm(formValue:any){
  this.activeModal.close(formValue)
  console.log(formValue.username)
  console.log(formValue.password)
  console.log("form submitted")
}

// closeModal(){
// this.activeModal.close('Modal Closed')
// }
}
