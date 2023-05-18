import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  readonly baseURL = 'http://localhost:4200/api/items'
  constructor(public httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get('/api/items') as Observable<Item[]>;
  }

  getItemById(id: number): Observable<Item> {
    return this.httpClient.get('/api/items/' + id) as Observable<Item>;
  }

  postItem(item: Item): Observable<Item> {
    return this.httpClient.post('/api/items', item) as Observable<Item>;
  }

  deleteItem(id: number): Observable<null> {
    return this.httpClient.delete('/api/items/' + id) as unknown as Observable<null>;
  }

  editItem(item: Item): Observable<null> {
    return this.httpClient.put('/api/items/' + item.id, item) as unknown as Observable<null>;
  }
}
