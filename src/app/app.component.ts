import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Let us know you position';
  lat: any;
  lng: any;
  formGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: '',
      contact: '',
    });
  }

  ngOnInit() {
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    } else {
      console.log('User not allow');
    }
  }

  onSubmit(formData) {
    this.getUserLocation();
    var name = formData['name'];
    console.log(formData);
    console.log(this.lng + 'and' + this.lat);
  }
}
