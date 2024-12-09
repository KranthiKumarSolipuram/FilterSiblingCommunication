import { Component } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchKey! :string ;

  constructor(private _shareService : ShareService){

  }

  public setSearchKey(){
    this._shareService.searchKey.next(this.searchKey);
  }
}
