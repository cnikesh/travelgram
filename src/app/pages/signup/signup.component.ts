import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

import { NgForm } from "@angular/forms"

import { AngularFireStorage } from "@angular/fire/storage"
import { AngularFireDatabase } from "@angular/fire/database"

import { finalize } from "rxjs/operators"

import { readAndCompressImage } from "browser-image-resizer"
import { imageConfig } from 'src/utils/config';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  picture: string = "https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  uploadPercent: number = null;

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
  }

  onSumbit(f: NgForm){

    const {email, password, username, country, bio, name} = f.form.value

    this.auth.signUp(email, password).then(
      (res) => {
        console.log(res)
        const { uid } = res.user

        this.db.object(`/users/${uid}`)
        .set({
          id: uid,
          name: name,
          bio: bio,
          country: country,
          instaUserName: username,
          picture: this.picture

        })
      }
    ).then(
      () => {
        this.router.navigateByUrl('/')
        this.toastr.success("Signup Success")
      }
    ).catch((error)=>{
      this.toastr.error("Signup error")
      console.log(error)
    })

  }

  async uploadFile(event){
    const file = event.target.files[0];

    let resizedImage = await readAndCompressImage(file, imageConfig);

    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);

    const task = this.storage.upload(filePath, resizedImage);

    task.percentageChanges().subscribe(
      (percentage) => {
        this.uploadPercent = percentage;
      }
    );

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(
          (url) => {
            this.picture = url;
            this.toastr.success("Image Uploaded")
          }
        )
      })
    ).subscribe()

  }

}
