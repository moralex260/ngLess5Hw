import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/models';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  @Input()
  users: User[];
  user: User;
  constructor(private router: Router, private activatedRoute: ActivatedRoute ) {
this.activatedRoute.data.subscribe(value => this.users = value.xxx);
  }
  ngOnInit(): void {
  }

  getSingleUser(user: User): void {
    this.router.navigate(['users', user.id] , {state: { user}});
  }
}
