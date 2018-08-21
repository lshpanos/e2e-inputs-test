import {Component, OnInit} from '@angular/core';
import {Post} from './post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title = 'Blog Component';
  post: Post = {title: '', body: ''};
  posts: Post[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  addPost() {
    this.posts.push(this.post);
    this.post = {title: '', body: ''};
  }

}
