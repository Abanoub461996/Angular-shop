import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  items: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      registerName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('')],
      ],
      registerUser: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^\\S*$')]],
      registerEmail: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      registerPass: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      registerConfirmPass: ['', [Validators.required]],
      items: this.fb.array([this.createItem()])
    },
      {
        validator: this.passwordsMatched
      }
    );
  }
  get registerFormControls() {
    return this.registerForm.controls;
  }
  passwordsMatched(fm: FormGroup) {
    return fm.controls['registerPass'].value == fm.controls['registerConfirmPass'].value ? null : { mismatch: true }
  }
  submitRegisterForm() {
    console.log(this.registerForm);

  }
  createItem(): FormGroup {
    return this.fb.group({
      registerAddress: ['', [Validators.pattern('\d{1,6}\s(?:[A-Za-z0-9#]+\s){0,7}(?:[A-Za-z0-9#]+,)\s*(?:[A-Za-z]+\s){0,3}(?:[A-Za-z]+,)\s*[A-Z]{2}\s*\d{5}')]],
      street: '',
      country: '',
      city: ''
    });
  }
  addItem(): void {
    this.items = this.registerForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  get addressForm(): FormArray {
    return <FormArray>this.registerForm.get('items');
  }


}
