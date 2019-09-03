import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editForm: FormGroup;
  user: User = new User();

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId")
    if(!userId) {
      alert("Invalid action!");
      this.router.navigate(["user"])
    }
    this.editForm = this.formBuilder.group({
      idUtilisateur: [],
      nomUtilisateur: ['', Validators.required],
      prenomUtilisateur: ['', Validators.required]
    })
    this.userService.getUtilisateur(+userId).subscribe(data =>{this.editForm.setValue(data)})
  }
  updateUtilisateur() {
    var varJson = JSON.stringify(this.editForm.value);
    this.userService.updateUser(varJson).subscribe(()=>{
      this.router.navigate(['user']);
    })
  }

}
