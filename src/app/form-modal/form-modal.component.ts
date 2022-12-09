import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {
constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder){
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
onClick() {
  console.log("Submit button was clicked!");
}
// closeModal(){
// this.activeModal.close('Modal Closed')
// }
}
