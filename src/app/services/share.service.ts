import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {


  searchKey : Subject<any> = new Subject <any>();

  constructor() { }
}
