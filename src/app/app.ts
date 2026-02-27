import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BirthdayComponent } from "../birthday-component/birthday-component";

@Component({
  selector: 'app-root',
  imports: [BirthdayComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(){

  }
  isVisible:boolean=false;
  protected readonly title = signal('birthday-app');
  goToGreeting(){
    this.isVisible = true;

  }
}
