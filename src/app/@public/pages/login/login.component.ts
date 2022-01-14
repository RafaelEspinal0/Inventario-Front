import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth.service';
import { validateAllFormFields } from 'src/app/@core/utils/form';
import { getMessageRequest } from 'src/app/@core/utils/message';
import { basicAlert } from 'src/app/@Shared/alerts/toats';
import { TYPE_ALERT } from 'src/app/@Shared/alerts/values.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private titleService:Title
  ) {
    this.buildForm();
   }

  form: FormGroup;
  loading = false;

  private buildForm(){
    this.form = this.formBuilder.group({
      identifier: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login(event: Event){
    event.preventDefault();
    if(this.form.valid){
      this.loading = true;
      const identifier = this.form.controls['identifier'].value;
      const password = this.form.controls['password'].value;
      this.authService.login(identifier, password).subscribe(
        (data:any) => {
          if(data.jwt && data.user !== null){
            basicAlert(TYPE_ALERT.SUCCESS, 'Sesion Iniciada');
            this.authService.setSession(data.jwt);
            this.loading = false;
            if (data.user.role.name === 'Administrador'){
              this.router.navigate(['/admin']);
            }
            return;
          }
        },
        (error) => {
          this.loading =false;
          basicAlert(
            TYPE_ALERT.ERROR, 
            getMessageRequest(error.error.data[0].messages[0].message)
          );
        }
      );
    }else{
      validateAllFormFields(this.form);
    }
  }

}
