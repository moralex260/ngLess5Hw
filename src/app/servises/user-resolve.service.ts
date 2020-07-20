import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {UserService} from './user.service';
import {User} from '../models/models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService  implements  Resolve<User[]>{

  constructor(private userService: UserService) { }

  resolve(): Observable<User[]> {
    return this.userService.getAllUser();
  }
}
