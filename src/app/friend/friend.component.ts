import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.fetchData()
   }

  fetchData = ()=>{
    this.myApi.datas().subscribe(
      (data) =>{
        this.friendData = data
      }
    )
  }

  friendData:any = []
  ngOnInit(): void {
  }

}
