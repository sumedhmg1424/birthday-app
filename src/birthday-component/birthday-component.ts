import { Component, OnInit, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
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
  datatxtletter: string = `
On your birthday, I wish you whole—
Joy that sparkles, love that stays,
Success that lights your brightest days 🌈💫.
You are my safe place, my guiding star 🌟,
No matter where life takes us, near or far.
I’ll guard your smile 😊, uplift your dreams 🌠,
And remind you of your worth in endless streams 💖.
So here’s to happiness, pure and true,
A reflection of the kindness that lives in you 🌹. 
Happy Birthday, Meri Pyari Sakhi 🥳🎂🎁
Forever cherished, forever you 💞.
`;
  titleLetter: string = "To My Sakhi...🌸";

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


  }

  playmusic(src:string){
    //this.audio.src = 'assets/birthday-music-3-1.1.mp3'; // path to your file
    this.audio.src = src; // path to your file
    this.audio.load();
    this.audio.loop = true;
    this.audio.play(); // start playing automatically

  }
  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
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

    this.playmusic('assets/birthday-music-3-1.1.mp3');

    this.audio.play();

  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
  }

  openLetter(): void {
    this.isLetterOpen = true;
    //this.audio.muted = true;
    this.playmusic('assets/birthday-music-3-1.2.mp3');

    this.audio.play();


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
     this.playmusic('assets/birthday-music-3-1.1.mp3');

    this.audio.play();
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


    