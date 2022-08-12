import { Post, PostService } from './core/services/post.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private postService: PostService){}

  postArray: Post[]

  showSpinner: boolean;

  getPosts() {
    this.postService.getPosts().subscribe(response => {
      this.postArray = response
    })
  }

  ngOnInit(): void {
    this.getPosts()
  }

}
