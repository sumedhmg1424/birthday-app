import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import confetti from 'canvas-confetti';


@Component({
  selector: 'app-birthday-component',
  imports: [],
  templateUrl: './birthday-component.html',
  styleUrl: './birthday-component.scss',
})
export class BirthdayComponent implements OnInit {
  private audio = new Audio();

  isMuted = false;


   datetxt: string = "2 March";
  datatxtletter: string = "Happy Birthday, bestie! You deserve all the love, joy, and success in the world. Here’s to more adventures together. Happy birthday to you.💕";
  titleLetter: string = "To you";

  charArrDate: string[] = [];
  charArrDateLetter: string[] = [];
  charArrTitle: string[] = [];

  currentIndex: number = 0;
  currentIndexLetter: number = 0;
  currentIndexTitle: number = 0;

  intervalContent: any;
  intervalTitle: any;

  isLetterOpen: boolean = false;

  @ViewChild('dateOfBirth', { static: true }) dateOfBirth!: ElementRef;
  @ViewChild('textLetter', { static: true }) textLetter!: ElementRef;
  @ViewChild('titleLetterEl', { static: true }) titleLetterEl!: ElementRef;
  @ViewChild('boxLetter', { static: true }) boxLetter!: ElementRef;

  constructor(private renderer: Renderer2) {
    this.audio.src = 'assets/birthday-music.mp3'; // path to your file
    this.audio.load();
    this.audio.loop = true;
    this.audio.play(); // start playing automatically


  }

  ngOnInit(): void {
    this.charArrDate = this.datetxt.split('');
    this.charArrDateLetter = this.datatxtletter.split('');
    this.charArrTitle = this.titleLetter.split('');

    // Animate date text after delay
    setTimeout(() => {
      const timeDatetxt = setInterval(() => {
        if (this.currentIndex < this.charArrDate.length) {
          this.dateOfBirth.nativeElement.textContent += this.charArrDate[this.currentIndex];
          this.currentIndex++;
        } else {
          const i = this.renderer.createElement('i');
          this.renderer.addClass(i, 'fa-solid');
          this.renderer.addClass(i, 'fa-star');
          this.renderer.insertBefore(this.dateOfBirth.nativeElement, i, this.dateOfBirth.nativeElement.firstChild);
          this.renderer.appendChild(this.dateOfBirth.nativeElement, i.cloneNode(true));
          clearInterval(timeDatetxt);
        }
      }, 100);
    }, 12000);

    this.launchConfetti();

    this.audio.play();

  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
  }

  openLetter(): void {
    this.isLetterOpen = true;

    // Animate title
    setTimeout(() => {
      this.intervalTitle = setInterval(() => {
        if (this.currentIndexTitle < this.charArrTitle.length) {
          this.titleLetterEl.nativeElement.textContent += this.charArrTitle[this.currentIndexTitle];
          const i = this.renderer.createElement('i');
          this.renderer.addClass(i, 'fa-solid');
          this.renderer.addClass(i, 'fa-heart');
          this.renderer.appendChild(this.titleLetterEl.nativeElement, i);
          this.currentIndexTitle++;
        } else {
          clearInterval(this.intervalTitle);
        }
      }, 100);
    }, 2000);

    // Animate letter content
    setTimeout(() => {
      this.intervalContent = setInterval(() => {
        if (this.currentIndexLetter < this.charArrDateLetter.length) {
          this.textLetter.nativeElement.textContent += this.charArrDateLetter[this.currentIndexLetter];
          this.currentIndexLetter++;
        } else {
          clearInterval(this.intervalContent);
        }
      }, 50);
    }, 6000);

    this.launchConfetti();
  }

  closeLetter(): void {
    clearInterval(this.intervalContent);
    clearInterval(this.intervalTitle);

    this.titleLetterEl.nativeElement.textContent = '';
    this.textLetter.nativeElement.textContent = '';

    this.currentIndexLetter = 0;
    this.currentIndexTitle = 0;

    this.isLetterOpen = false;
  }


  launchConfetti() {
    const duration = 7 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
}


    