import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post, User} from '../../models/models';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute , private router: Router) {
    this.activatedRoute.params.subscribe(params => this.user = history.state.user);
  }
user: User;
@Input()
post: Post;
  ngOnInit(): void {
  }
  showUserPosts(user: User): void {
    this.router.navigate(['post', user.id] );
  }
}
