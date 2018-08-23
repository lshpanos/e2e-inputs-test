import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      {id: 1, title: 'Post 1', body: 'This is post 1'},
      {id: 2, title: 'Post 2', body: 'This is post 2'}
    ];
    return {posts};
  }
}

