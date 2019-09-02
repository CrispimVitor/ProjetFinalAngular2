import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[];
  user: User = new User();
  constructor(private userService: UserService, private appService: AppService) { }

  authenticated() {
    return this.appService.authenticated;
  }

  ngOnInit() {
    this.locadUser();
  }
  locadUser() {
    this.userService.getAllUtilisateur().subscribe(
      data => {this.users = data;},
      error => {console.log(error);}
    )
  }
  createUser() {
    this.userService.saveUtilisateur(this.user).subscribe(
      () => {this.locadUser(); this.user = new User(); }
    )
  }
  eliminateUser(user) {
    this.userService.deleteUtilisateur(user.idUtilisateur).subscribe(
      () => {this.locadUser();},
      error => {console.log(error);}
    )
  }

}
