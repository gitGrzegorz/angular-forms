import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Create new user';
  @ViewChild('userForm')
  private userForm;

  actionOnSubmit() {
    console.log(JSON.stringify(this.userForm.value));
  }
}
