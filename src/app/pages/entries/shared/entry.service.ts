import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { CategoryService } from '../../categories/shared/category.service';
import { Entry } from './entry.model';


@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(protected injetor: Injector, private categoryService: CategoryService) {
    super("api/entries", injetor, Entry.fromJson);
  }

  create(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.create.bind(this))
  }

  update(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.update.bind(this))
  }


  private setCategoryAndSendToServer(entry: Entry, sendFn: any): Observable<any>{
    return this.categoryService.getById(entry.categoryId).pipe(
      mergeMap(category => {
        entry.category = category;
       return sendFn(entry);
      }),
      catchError(this.handleError)
    );
  }
}
