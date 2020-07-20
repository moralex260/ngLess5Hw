import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Post} from '../models/models';
import {PostService} from './post.service';


@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]> {

  constructor(private postService: PostService) {
  }

  resolve(post): Observable<Post[]> {
    return this.postService.getUserPosts(post.userId);
  }
}
