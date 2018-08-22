import {Injectable} from '@angular/core';
import {MOCKPOSTS} from './posts.mock';
import {Post} from './post.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  posts = MOCKPOSTS;

  constructor() {
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }
}
