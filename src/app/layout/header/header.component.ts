import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = null;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { 
    auth.getUser().subscribe(
      (user) => {
        console.log("User is",user)
        this.email = user?.email
      }
    )
  }

  ngOnInit(): void {
  }

  async handleSignOut(){
    try{
      await this.auth.signOut();
      this.router.navigateByUrl("/signin");
      this.toastr.info("Logout Success")
      this.email  = null;

    }catch(error){
      this.toastr.error("problem in signout",error)

    }
  }

}
