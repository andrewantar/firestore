import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CoreModule } from './core/core.module';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  title: string;
  content: string;
  

  constructor(private afs: AngularFirestore) {}
  
    ngOnInit() {
      this.postsCol = this.afs.collection('posts', ref => {
        return ref.orderBy('title');
      });
      this.posts = this.postsCol.valueChanges();
    }

    addPost() {
      this.afs.collection('posts').add({'title': this.title, 'content': this.content});
    }
}
