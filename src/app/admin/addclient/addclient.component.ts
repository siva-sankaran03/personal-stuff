import { Component, OnInit } from '@angular/core';
import { GetClientDataService } from '../../services/get-clientdata.service';
import { Client } from './client';

@Component({
selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  clientData: any = []
  callSingleClient = new Client()
  updateBtn: boolean = true
  
  constructor(private getAllData: GetClientDataService) {
    this.getPosts();
   }
   ngOnInit() {
  }
   postCurrent(client: Client) {
    console.log("I am in post")
    console.log(this.callSingleClient)

    this.getAllData.postData(client)
      .subscribe(data => { console.log("Success"); this.getPosts() });
  }

  // Fetching all the data from the database
  getPosts() {
    this.getAllData.getData()
      .subscribe(data => { this.clientData = data.message; console.log(this.clientData); })
  }

  //Get particular data
  getSinglePost(clientID: string) {
    this.updateBtn = false
    console.log("I am in getting single post")
    this.getAllData.getSingleData(clientID)
      .subscribe(data => {
        this.callSingleClient = data.message; console.log(this.callSingleClient.clientid)
      })
  }

  // Update single post
  updatePost(clientID: string) {
    this.updateBtn = true
    console.log(this.callSingleClient)
    this.getAllData.updateData(this.callSingleClient, clientID)
      .subscribe(data => { console.log("Updated data " + clientID); this.getPosts() })
  }


  // Deleting a particular data from list
  deletePost(clientID: string) {
    console.log("Inside delete function")

    this.getAllData.deleteData(clientID)
      .subscribe(data => { console.log("Deleted: " + clientID); this.getPosts() })
  }

 


}
