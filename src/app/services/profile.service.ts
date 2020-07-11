import { Injectable } from "@angular/core";

import { Profile } from "../models/profile";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, filter } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfileData(): Observable<Profile> {
    const profileUrl = "https://jsonplaceholder.typicode.com/photos";
    return this.http.get<any>(profileUrl).pipe(
      // map((data: Profile) => data),
      map((data => data.filter(item => item.id < 10))),
      catchError((err) => {
        return throwError(
          "Problem fetching profile data from API, error: ",
          err
        );
      })
    );
  }
}
