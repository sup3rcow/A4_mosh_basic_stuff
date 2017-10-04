import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  // dodas keyword private i parametar postaje prvivate field i mozes ga koristiti unutar klase
  constructor(private service: PostService) {

  }

  // pozivas servis kada se inicijalizira komponenta i potrebni su podaci, ne redi ovo unutar konstruktora
  ngOnInit() {
    this.service.getPosts()
    .subscribe(
      response => {
        this.posts = response.json();
      }
      // ,
      // error => {                        // ne treba ti jer si prebacio da ovo radi globalni AppErrorHandler
      //   throw error;
      // }
    );
    }

  createPost(input: HTMLInputElement) {
    let data = { title: input.value};
    input.value = '';

    this.service.createPost(data)
    .subscribe(
      respones => {
        // console.log(respones.json());
        data['id'] = respones.json().id; // ili data.id = respones.json().id; ali onda gore data definiras kao any objekt
        // dodas u postojeci array, mada mozda bi trebao opet napraviti get
        // this.posts.push(data); // doda na kraj liste
        this.posts.splice(0, 0, data);
      },
      (error: AppError) => {
        if (error instanceof BadInputError) {
          // zamislis da imas tu formu, i ako server vrati greske na formi, propagiras to na svoj form objekt
          // this.form.setErrors(error.json()); // ovo je kad primis error: Response
          // this.form.setErrors(error.originalError);
          alert('Forma sa podacima nije ispravna');
        } else {
          // alert('Unexpected error occured.');
          // console.log(error);
          throw error; // moras trow-ati error kako bi ga pokupio global error handler, a to je naš AppErrorHandler
        }
      });
    }

  updatePost(data) {
    console.log(data);
    // this.http.post(this.url, JSON.stringify(data)); // patch updejta samo dio proprtija, dok put sve
    this.service.updatePost(data)
    .subscribe(
      (response: Response) => {
        console.log(response.json());
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post do not exsist on the server. - update');
        } else {
          throw error;
        }
      });
    }

  deletePost(data) {
    console.log(data);
    this.service.deletePost(data.id)
    .subscribe(
      (response: Response) => {
        console.log(response.status);
        let index = this.posts.indexOf(data);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post do not exsist on the server. - delete');
        } else {
          // alert('Unexpected error occured.');
          // console.log(error);
          throw error;
        }
      });
    }
}
