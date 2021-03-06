import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';


@Component({
  selector: 'app-list-clubs',
  templateUrl: './list-clubs.component.html',
  styleUrls: ['./list-clubs.component.css']
})
export class ListClubsComponent implements OnInit {

    public isbn;
    public api_result
    public info;
    //declare variable to hold response and make it public to be accessible from components.html
    public clubs;


    myCallback(x) {

      // var xhttp = new XMLHttpRequest();
      // xhttp.onreadystatechange = function() {
      //     if (this.readyState == 4 && this.status == 200) {
      //        // Typical action to be performed when the document is ready:
      //        document.getElementById("demo_title").style.visibility = "block";
      //        document.getElementById("demo").innerHTML = xhttp.responseText;

      //     }
      // };
      // xhttp.open("GET", "https://www.goodreads.com/api/reviews_widget_iframe?did=DEVELOPER_ID&amp;format=html&amp;isbn=" + x + "&amp;links=660&amp;min_rating=&amp;review_back=fff&amp;stars=000&amp;text=000", true);
      // xhttp.send();


      document.getElementById("demo").setAttribute ("src", "https://www.goodreads.com/api/reviews_widget_iframe?did=DEVELOPER_ID&amp;format=html&amp;isbn=" + x + "&amp;links=660&amp;min_rating=&amp;review_back=fff&amp;stars=000&amp;text=000");
      document.getElementById("demo_div").style.display = "block";


    }

    // func1 (x){
    //   // document.getElementById("info").innerHTML = x;
    //   alert (x)
    // }

    //initialize the call using StudentService
    constructor(private _myService: ClubService) { }
    ngOnInit() {
      this.getClubs();
    }
    //method called OnInit
    getClubs() {
     this._myService.getClubs().subscribe(
        //read data and assign to public variable students
        data => { this.clubs = data},
        err => console.error(err),
        () => console.log("success")
      );
    }

    // getInfo() {
    //   this._myService.getInfo(this.isbn).subscribe(
    //      //read data and assign to public variable students
    //      data => { this.info = data},
    //      err => console.error(err),
    //      () => this.func1(this.info)
    //    );
    //  }

    onDelete(clubId: string) {
      this._myService.deleteClub(clubId);
    }




}

