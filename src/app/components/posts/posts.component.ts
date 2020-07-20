import {Component, Input, OnInit} from '@angular/core';
import {Post, User} from '../../models/models';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../servises/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
 posts: Post[];
 user: User;
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
   this.activatedRoute.data.subscribe(value => this.posts = value.yyy);
   // this.activatedRoute.params.subscribe(params => this.postService.getUserPosts(params.id).subscribe(value => this.posts = value) );
  }


  ngOnInit(): void {
  }

}
