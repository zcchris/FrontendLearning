import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from '../posts-service.service';
import { Observable } from 'rxjs';
import { Comment } from '../model/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  comments: Comment[];
  isLoaded = false;

  constructor(private service: PostsServiceService) {
    this.comments = [];
  }

  ngOnInit(): void {
    this.service.getUserComments().subscribe((res) => {
      console.log(res);
      for (const i in res) {
        if (i !== null) {
          this.comments.push(
            new Comment(res[i].name, res[i].email, res[i].body)
          );
        }
      }
      this.isLoaded = true;
    });
  }
}
