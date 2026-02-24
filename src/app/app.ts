import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BirthdayComponent } from "../birthday-component/birthday-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BirthdayComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('birthday-app');
}
