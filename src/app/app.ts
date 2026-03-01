import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BirthdayComponent } from "../birthday-component/birthday-component";
import { BirthdayHome } from "../birthday-home/birthday-home";

@Component({
  selector: 'app-root',
  imports: [BirthdayHome, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
