import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title = 'Blog Component';
  post = {title: '', body: ''};
  posts = [];

  constructor() {
  }

  ngOnInit() {
  }

  addPost() {
    console.log(this.post);
  }

}
