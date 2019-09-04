import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [UserComponent, FilterPipe],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [UserComponent]
})
export class UserModule { }
