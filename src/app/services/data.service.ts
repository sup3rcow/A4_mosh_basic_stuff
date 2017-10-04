import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable'; // da mozes kreiarti sam observable objekt
import 'rxjs/add/operator/catch'; // importas catch extension metodu za observable objekte
import 'rxjs/add/observable/throw'; // da observable moze throw-ati
import 'rxjs/add/operator/map';

import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    // dodas keyword private i parametar postaje prvivate field i mozes ga koristiti unutar klase
    constructor(private url: string, private http: Http) {}

    getAll() {
        return this.http.get(this.url)
        .map(response => response.json()) // pretvaras json u javascript objekt
        // tu ne moras catch, jer ne ocekujes greske, jer global errorhendler smo zamijenili sa AppErrorHandler..
        .catch(this.handleError);
      }

      create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
        .map(response => response.json())
        .catch(this.handleError);
      }

      update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
        .map(response => response.json())
        .catch(this.handleError);
      }

      delete(id) {
        return this.http.delete(this.url + '/' + id)
        .map(response => response.json()) // u ovom slucaju bit ce prazan objekt {}, server vrati samo ok..
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
