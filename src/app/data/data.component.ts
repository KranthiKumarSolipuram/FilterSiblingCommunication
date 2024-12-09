import { Component, OnInit } from '@angular/core';
import { IPost } from './post-model';
import { DataService } from '../services/data.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{

  Posts = [] as IPost[];
  tempPosts = [] as IPost[];
  // searchKey : string ="";

  constructor(private _dataService : DataService, private _shareService: ShareService){ }

  ngOnInit(): void {
      this.loadPost();

      this._shareService.searchKey.subscribe(
        {
          next : (data) => {
            // this.searchKey=data;
            // console.log(this.searchKey);
            // this.filterData(this.searchKey);
            this.filterData(data);
          },
          error : err => console.log(err)

        }
      );
  }

  public loadPost(){
    this._dataService.getData("https://jsonplaceholder.typicode.com/posts").subscribe({
      next: data => {
        this.Posts=data as IPost[];
        this.tempPosts=this.Posts;
      },
      error:err => console.log(err),
      complete : () => console.log("Completed")
    });
  }

  public filterData(searchKey: any){
    this.Posts= this.tempPosts.filter((post) => {
        if(post.title.indexOf(searchKey) != -1)
          return post;
        else
        return null;
    });
  }
}
