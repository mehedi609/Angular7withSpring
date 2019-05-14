import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService } from "../service/Data/welcome-data.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  name = "";
  messageFromWelcomeDataService = "";
  errormsgFromWelcomeDataSer = "";

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService
      .executeHelloWorldBeanService()
      .subscribe(
        response => this.handleSuccessfulResponse(response),
        error1 => this.handelErrorResponse(error1)
      );
  }

  getWelcomeMessageWithVar() {
    this.welcomeDataService
      .executeHelloWorldServiceWithPathVar("mehedi")
      .subscribe(
        response => this.handleSuccessfulResponse(response),
        error1 => this.handelErrorResponse(error1)
      );
  }

  handleSuccessfulResponse(response) {
    this.messageFromWelcomeDataService = response.message;
  }

  handelErrorResponse(error) {
    this.errormsgFromWelcomeDataSer = error.error.message;
  }
}
