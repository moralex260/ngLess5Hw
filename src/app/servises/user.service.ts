import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient ){ }
  getAllUser(): Observable<User[]>{
   return  this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
