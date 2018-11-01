import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserInfoService, UserInfo } from 'src/app/common/user-info.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  location;

  constructor(private userInfo: UserInfoService, private http: HttpClient) { }

  user: UserInfo;

  checkIfLoggedOn() {
    if (this.userInfo.loggedOn) {
      this.user = this.userInfo.user;
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

  // if (window.navigator && window.navigator.geolocation) {
  //   window.navigator.geolocation.getCurrentPosition(
  //     position => {
  //       const YOUR_API_KEY = 'AIzaSyBZzlcSHSPs14HS9l4J5UskFK4CSA_9o1M';
  //       const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude}
  // ,${position.coords.longitude}&key=${YOUR_API_KEY}`;
  //       console.log(url);
  //       this.http.get<any>(url)
  //         .subscribe(response => this.location = response.results[0].formatted_address);
  //     }
  //   );
  // }
}

// AIzaSyBZzlcSHSPs14HS9l4J5UskFK4CSA_9o1M
