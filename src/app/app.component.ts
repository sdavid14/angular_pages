import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//  , imports: [MatInputModule]
})
export class AppComponent implements OnInit {
  public patientEmail: String ="";
  public queryParam: any;
  public value: any = 'hi';

  constructor(private route: ActivatedRoute) {

    this.queryParam = this.route.queryParamMap.subscribe(param => {
    this.patientEmail = String(param.get('patientEmail'));
})


  }

  getGreeting() {
    if (this.patientEmail!="null") {
      return "Hello " + this.patientEmail + " !";
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
