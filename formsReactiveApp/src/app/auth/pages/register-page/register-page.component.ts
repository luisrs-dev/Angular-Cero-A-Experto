import { EmailValidator } from './../../../shared/validators/email.validator.service';
import { ValidatorService } from './../../../shared/service/validator.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    // email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], new EmailValidator()],
    // La línea de arriba es lo mismo que la de abajo, sin embargo, la de abajo es más recomendada por rendimiento, para usar siempre la misma insatancia
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.canBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [
      this.validatorService.isfieldOneEqualFieldTwo('password', 'password2')
    ]
  })

  constructor(
    private fb: FormBuilder,
    public validatorService: ValidatorService,
    private emailValidator: EmailValidator
  ) { }

  isValiedField(field: string) {
    return this.validatorService.isValidField(this.myForm, field)
  }

  onSubmit(): void {
    console.log(this.myForm.value);
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }
}
