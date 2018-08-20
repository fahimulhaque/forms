import { UsernameValidators } from './username.validator';
import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    username: new FormControl('', [Validators.required , Validators.minLength(3)], UsernameValidators.shouldBeUnique),
    password: new FormControl('', [Validators.required , Validators.minLength(8)] , UsernameValidators.shouldBeUnique)
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    this.form.setErrors({
      invalidogin: true
    });
  }

  log(x) { console.log(x); }
}
