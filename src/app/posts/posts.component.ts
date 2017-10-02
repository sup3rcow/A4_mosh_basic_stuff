import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { // dodas keyword private i parametar postaje prvivate field i mozes ga koristiti unutar klase

  }

  // pozivas servis kada se inicijalizira komponenta i potrebni su podaci, ne redi ovo unutar konstruktora
  ngOnInit() {
    this.http.get(this.url)
    .subscribe((response => {
     this.posts = response.json();
    }));
  }

  createPost(input: HTMLInputElement) {
    let data = { title: input.value};

    this.http.post(this.url, JSON.stringify(data))
    .subscribe(respones => {
      // console.log(respones.json());
      data['id'] = respones.json().id; // ili data.id = respones.json().id; ali onda gore data definiras kao any objekt
      // dodas u postojeci array, mada mozda bi trebao opet napraviti get
      // this.posts.push(data); // doda na kraj liste
      this.posts.splice(0, 0, data);
    });
    input.value = '';
  }

  updatePost(input) {
    console.log(input);
    // this.http.post(this.url, JSON.stringify(input)); // patch updejta samo dio proprtija, dok put sve
    this.http.patch(this.url + '/' + input.id, JSON.stringify({ isRead: true }))
    .subscribe((response) => {
      console.log(response.json());
    });
  }

  deletePost(input) {
    this.http.delete(this.url + '/' + input.id)
    .subscribe(response => {
      console.log(response.json());

      let index = this.posts.indexOf(input);
      this.posts.splice(index, 1);
    });
  }
}
