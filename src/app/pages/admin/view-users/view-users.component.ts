import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from 'src/app/components/user-dialog/user-dialog.component';
import { Book } from 'src/app/modal/book';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  isUserAuthor = false;
  bookList!: Book[];

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadDefaultValues();
  }

  showPopup(){
this.dialog.open(UserDialogComponent);
  }

  loadDefaultValues(){
    this.bookList = [{
      title: 'What Happened Next',
      description: 'example text to build on the card title',
      author: 'Velu Pillai',
      readCount: 20,
      starCount: 1,
      mode: true
    },
    {
      title: 'Hidden Secrets',
      description: 'make up the bulk of the',
      author: 'Lorin palvis',
      readCount: 10,
      starCount: 0,
      mode: false
    },
    {
      title: 'Olympic game',
      description: '',
      author: 'Tokyo',
      readCount: 0,
      starCount: 3,
      mode: true
    },
    {
      title: 'hp notebook',
      description: '',
      author: 'hp',
      readCount: 0,
      starCount: 0,
      mode: true
    },
    {
      title: 'anuglar',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      author: 'Google',
      readCount: 0,
      starCount: 0,
      mode: true
    },
    {
      title: 'Typescript',
      description: '',
      author: 'ESM',
      readCount: 0,
      starCount: 0,
      mode: true
    }];
  }
}
