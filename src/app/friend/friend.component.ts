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

  _id = ""
  name = ""
  friendName = ""
  friendNickName = ""
  DescribeYourFriend = ""

  fetchData = ()=>{
    this.myApi.datas().subscribe(
      (data) =>{
        this.friendData = data
      }
    )
  }

  readValues = ()=>{
    let data = {
      "_id" : this._id,
      "name" : this.name,
      "friendName" : this.friendName,
      "friendNickName" : this.friendNickName,
      "DescribeYourFriend" :this.DescribeYourFriend  
    }
    console.log(data)
  }

  friendData:any = []
  ngOnInit(): void {
  }

}
