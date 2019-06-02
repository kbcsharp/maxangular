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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus =
      "server was created!  server name is " + this.serverName;
  }

  resetUserName() {
    this.userName = "";
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
