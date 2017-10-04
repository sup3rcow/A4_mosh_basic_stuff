import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable'; // da mozes kreiarti sam observable objekt
import 'rxjs/add/operator/catch'; // importas catch extension metodu za observable objekte
import 'rxjs/add/observable/throw'; // da observable moze throw-ati

import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { // dodas keyword private i parametar postaje prvivate field i mozes ga koristiti unutar klase

  }

  getPosts() {
    return this.http.get(this.url)
    // tu ne moras ovo, jer ne ocekujes greske, jer global errorhendler smo zamijenili sa AppErrorHandler..
    .catch(this.handleError);
  }

  createPost(data) {
    return this.http.post(this.url, JSON.stringify(data))
    .catch(this.handleError);
  }

  updatePost(data) {
    return this.http.patch(this.url + '/' + data.id, JSON.stringify({ isRead: true }))
    .catch(this.handleError);
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInputError());
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError()); // ne saljemo originalni error, jer ne zelimo ovu gresku logirati
    } else {
      return Observable.throw(new AppError(error));
      // return nesmije biti tipa 'Response', kreirao si app-error.ts, koja predstavlja model naseg error objekta
      // dobra praksa je da unutar naseg error-a includeati i originalni error, kako bi je mogli logirati na serveru kasnije
    }
  }

}
