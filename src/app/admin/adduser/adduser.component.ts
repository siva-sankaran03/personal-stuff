import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { User } from './user';
//import { AdduserService} from '../../services/adduser.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userData: any = []
  callSingleUser = new User()
  updateBtn: boolean = true
  constructor(private getAllData: GetDataService) {
    this.getPosts();
  }
  ngOnInit() {
  }
  

  postCurrent(user: User) {
    console.log("I am in post")
    console.log(this.callSingleUser)

    this.getAllData.postData(user)
      .subscribe(data => { console.log("Success"); this.getPosts() });
  }

  // Fetching all the data from the database
  getPosts() {
    this.getAllData.getData()
      .subscribe(data => { this.userData = data.message; console.log(this.userData); })
  }

  //Get particular data
  getSinglePost(userID: string) {
    this.updateBtn = false
    console.log("I am in getting single post")
    this.getAllData.getSingleData(userID)
      .subscribe(data => {
        this.callSingleUser = data.message; console.log(this.callSingleUser.fname)
      })
  }

  //Update single post
  updatePost(userID: string) {
    this.updateBtn = true
    console.log(this.callSingleUser)
    this.getAllData.updateData(this.callSingleUser, userID)
      .subscribe(data => { console.log("Updated data " + userID); this.getPosts() })
  }


  // Deleting a particular data from list
  deletePost(userID: string) {
    console.log("Inside delete function")

    this.getAllData.deleteData(userID)
      .subscribe(data => { console.log("Deleted: " + userID); this.getPosts() })
  }



}
