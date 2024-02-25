import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';

import { finalize } from 'rxjs/operators';

import { readAndCompressImage } from 'browser-image-resizer';
import { imageConfig } from 'src/utils/config';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
})
export class AddpostComponent implements OnInit {
  locationName: string;
  description: string;
  picture: string = null;

  user = null;
  uploadPercent: number = null;

  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService,
    private storage: AngularFireStorage,
    private tostr: ToastrService,
    private router: Router
  ) {
    auth.getUser().subscribe((user) => {
      this.db
        .object(`/users/${user.uid}`)
        .valueChanges()
        .subscribe((user) => {
          this.user = user;
        });
    });
  }

  ngOnInit(): void {}

  onSubmit(){
    const uid = uuidv4();
    this.db.object(`/posts/${uid}`).set({
      id:uid,
      location: this.locationName,
      description: this.description,
      picture: this.picture,
      by: this.user.instaUserName,
      date: Date.now()
    }).then(
      ()=>{
        this.tostr.success("Posted Sucessfully")
        this.router.navigateByUrl('/')
      }
    ).catch(
      (err) => {
        this.tostr.error(err.message)
      }
    )
  }

  async uploadFile(event){

    const file = event.target.files[0]
    let resizedImage = await readAndCompressImage(file, imageConfig)

    const filePath = file.name
    const fileRef = this.storage.ref(filePath)

    const task = this.storage.upload(filePath, resizedImage)

    task.percentageChanges().subscribe(
      (percentage) => {
        this.uploadPercent = percentage

      }
    )

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(
          (url) => {
            this.picture = url
            this.tostr.success("Image Upload Success")
          }
        )
      })
    ).subscribe()

  }
}
