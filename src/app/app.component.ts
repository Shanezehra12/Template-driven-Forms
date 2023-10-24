import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular' , 'React' , 'Vue']

  userModel = new User('shane' , 'shane@test.com', 123456789, 'default', 'Morning' , true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  constructor(private _enrollmentService: EnrollmentService) {}

   validateTopic(value: any) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
  } 
}
