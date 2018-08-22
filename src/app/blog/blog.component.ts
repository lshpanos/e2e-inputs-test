import {Component, OnInit} from '@angular/core';
import {Post} from './post.model';
import {BlogService} from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title = 'Blog Component';
  post: Post = {title: '', body: ''};
  posts: Post[];

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  addPost() {
    this.blogService.addPost(this.post);
    this.post = {title: '', body: ''};
  }

  getPosts(): void {
    this.blogService.getPosts().subscribe(posts => this.posts = posts);
  }

}
