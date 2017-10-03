import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { // dodas keyword private i parametar postaje prvivate field i mozes ga koristiti unutar klase

  }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(data) {
    return this.http.post(this.url, JSON.stringify(data));
  }

  updatePost(data) {
    return this.http.patch(this.url + '/' + data.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }

}
