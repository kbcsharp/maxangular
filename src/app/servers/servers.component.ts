import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.scss"]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = "no server was created";
  serverName: string = "test server";
  userName: string = "";
  serverCreated: boolean = false;
  servers: Array<string> = ["Testserver", "Testserver2"];
  secret: boolean = false;
  secretArray = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      "server was created!  server name is " + this.serverName;
  }

  resetUserName() {
    this.userName = "";
  }

  toggleSecret() {
    this.secret = !this.secret;
    this.secretArray.push(new Date());
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
