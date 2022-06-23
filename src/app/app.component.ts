import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { ProfileService } from "./services/profile.service";
import { Profile } from "./models/profile";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  myData$: Observable<Profile>;

  constructor(private profileService: ProfileService) {
    this.myData$ = this.profileService.getProfileData();
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
