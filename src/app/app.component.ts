import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//  , imports: [MatInputModule]
})
export class AppComponent implements OnInit {
  public patientEmail: any;
  public firstName: any;
  public lastName: any;
  public queryParam: any;
  public value: any = 'hi';

  constructor(private route: ActivatedRoute) {

    this.queryParam = this.route.queryParamMap.subscribe(param => {
    this.patientEmail = param.get('patientEmail');
    this.firstName = param.get('firstName');
})


  }

  getGreeting() {
    if (this.patientEmail!="null") {
      return "";
    } else {
      return "";
    }
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params=> {
      console.log(params); // { orderby: "price"}
    });



  }

  clickFunction() {
    console.log('Hello there' + this.value );
  }
}
