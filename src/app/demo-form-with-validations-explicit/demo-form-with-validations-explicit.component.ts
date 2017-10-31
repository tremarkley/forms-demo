import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-explicit',
  templateUrl: './demo-form-with-validations-explicit.component.html',
  styleUrls: ['./demo-form-with-validations-explicit.component.css']
})
export class DemoFormWithValidationsExplicitComponent {
  myForm: FormGroup;

    constructor(fb: FormBuilder) {
      this.myForm = fb.group({
      'sku': ['', Validators.required]
      });

    }

    onSubmit(value: string): void {
      console.log('you submitted value: ', value);
    }

}


