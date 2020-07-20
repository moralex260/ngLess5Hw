import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AllUserComponent } from './components/all-user/all-user.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { PostsComponent } from './components/posts/posts.component';
import {UserResolveService} from './servises/user-resolve.service';
import {PostResolveService} from './servises/post-resolve.service';
const routes = [{path: 'users', component: AllUserComponent,
resolve: {xxx: UserResolveService},
  children: [{path: ':id', component: SingleUserComponent, children:
      [{path: 'posts', component: PostsComponent,
        resolve: {yyy: PostResolveService},
      children: [{path: ':id' , component: PostsComponent}]}]}]
}];
@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    SingleUserComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
