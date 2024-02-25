import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
NgForm

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    const{email, password} = f.form.value
    this.auth.signIn(email, password).then(
      (res)=>{
        this.toastr.success("Sign In Success");
        this.router.navigateByUrl('/')
      }
    ).catch(
      (error) => {
        this.toastr.error(error.message,'SignIn Failed',{
          closeButton:true
        })
      }
    )
  }

}
