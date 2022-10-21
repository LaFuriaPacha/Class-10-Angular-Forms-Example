import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.css']
})
export class BookFormTemplateComponent implements OnInit {
  hasBeenSubmitted = false;
  book = '';
  bookDetails =  {
    title: '',
    author: '',
    genre: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(formObj: NgForm){
    this.hasBeenSubmitted = true;

    this.bookDetails.title = formObj.value.title;
    this.bookDetails.author = formObj.value.author;
    this.bookDetails.genre = formObj.value.genre;

    formObj.reset()
  }
}
