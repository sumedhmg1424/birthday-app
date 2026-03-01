import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BirthdayComponent } from "../birthday-component/birthday-component";

@Component({
  selector: 'app-birthday-home',
  imports: [RouterOutlet, BirthdayComponent],
  templateUrl: './birthday-home.html',
  styleUrl: './birthday-home.scss',
})
export class BirthdayHome {
constructor(){

  }
  isVisible:boolean=false;
  goToGreeting(){
    this.isVisible = true;

  }
}
