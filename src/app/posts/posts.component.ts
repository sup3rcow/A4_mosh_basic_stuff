import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) { // dodas keyword private i parametar postaje prvivate field i mozes ga koristiti unutar klase

  }

  // pozivas servis kada se inicijalizira komponenta i potrebni su podaci, ne redi ovo unutar konstruktora
  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
     this.posts = response.json();
    }, error => {
      alert('Unexpected error occured.');
    });
  }

  createPost(input: HTMLInputElement) {
    let data = { title: input.value};
    input.value = '';

    this.service.createPost(data)
    .subscribe(respones => {
      // console.log(respones.json());
      data['id'] = respones.json().id; // ili data.id = respones.json().id; ali onda gore data definiras kao any objekt
      // dodas u postojeci array, mada mozda bi trebao opet napraviti get
      // this.posts.push(data); // doda na kraj liste
      this.posts.splice(0, 0, data);
    });
  }

  updatePost(data) {
    console.log(data);
    // this.http.post(this.url, JSON.stringify(data)); // patch updejta samo dio proprtija, dok put sve
    this.service.updatePost(data)
    .subscribe((response) => {
      console.log(response.json());
    });
  }

  deletePost(data) {
    this.service.deletePost(data.id)
    .subscribe(response => {
      console.log(response.json());

      let index = this.posts.indexOf(data);
      this.posts.splice(index, 1);
    });
  }
}
