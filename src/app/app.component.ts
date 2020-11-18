import { Component } from "@angular/core";

import { ProfileService } from "./services/profile.service";
import { Profile } from "./models/profile";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  myData: Profile;

  constructor(private profileService: ProfileService) {
    this.profileService.getProfileData().subscribe((response) => {
      this.myData = response;
      console.log(this.myData);
    });
  }
}
