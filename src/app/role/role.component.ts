import { Component, OnInit } from '@angular/core';
import { Role } from 'app/models/role';
import { RoleService } from 'app/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  roles: any[];
  role: Role = new Role();
  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.locadRole();
  }
  locadRole() {
    this.roleService.getAllRole().subscribe(
      data => {this.roles = data;},
      error => {console.log(error);}
    )
  }
  createRole() {
    this.roleService.saveRole(this.role).subscribe(
      () => {this.locadRole(); this.role = new Role(); }
    )
  }
  eliminateRole(role) {
    this.roleService.deleteRole(role.idRole).subscribe(
      () => {this.locadRole();},
      error => {console.log(error);}
    )
  }

}
