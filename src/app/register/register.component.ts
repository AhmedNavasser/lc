import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private isTermsAccepted = false;
  isRegisterButtonEnabled = false;

  constructor(private route: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
       if(this.isTermsAccepted === false){
            alert('شما شرایط را نپذیرفته اید');
            return;
       }
       if (!form.valid) {
         alert('اطلاعات ورودی شما صحیح نمی باشد.');
       } else {
          const message = `${form.value['firstName']} : اطلاعات شما با موفقیت ذخیره گردید`;
          alert(message);
          form.resetForm();

         }
  }
  onCancel(){
    this.route.navigate(['/home']);
  }
  onChange(){
      this.isTermsAccepted = !this.isTermsAccepted;
      this.isRegisterButtonEnabled = !this.isRegisterButtonEnabled;
  }
}
