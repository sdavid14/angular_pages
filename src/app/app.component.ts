import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public patientEmail: any;
  public firstName: any;
  public lastName: any;
  public queryParam: any;

  constructor(private route: ActivatedRoute) {

    this.queryParam = this.route.queryParamMap.subscribe(param => {
    this.patientEmail = param.get('patientEmail');
    this.firstName = param.get('firstName');
})


  }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params=> {
      console.log(params); // { orderby: "price"}
    });



  }

  clickFunction() {
    console.log('Hello there');
  }
}
