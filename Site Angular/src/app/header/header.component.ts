import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { OnDestroy } from '@angular/core'
import { ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Howl} from 'howler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {
  public url?: string;
  home = false;
  constructor(private location: Location, private router: Router) {}

  toggle = false;

  switchToggle() {
    this.toggle = !this.toggle;
  }
  
  hoverSound!: Howl;
  clickSound!: Howl;

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      if (this.location.path() != '') {
        this.url = this.location.path().replace('/', '');
        this.url = this.url[0].toUpperCase() + this.url.substring(1).toLowerCase();
      }
      if (this.location.path() === '') {
        this.home = true;
      } else {
        this.home = false;
      }
    });

    this.hoverSound = new Howl({
      src: ['../../../assets/sounds/sounds1.wav']
    });

    this.clickSound = new Howl({
      src: ['../../../assets/sounds/sounds2.wav']
    });
  }

  GoToHome() {
    this.router.navigate(['']);
  }

  GoToInventory() {
    this.router.navigate(['inventory']);
  }

  GoToContact() {
    this.router.navigate(['contact']);
  }

  ngOnDestroy(): void {
    this.hoverSound?.stop();
    this.clickSound?.stop();
  }

  playHoverSound(): void {
    this.hoverSound?.play();
  }

  playClickSound(): void {
    this.clickSound?.play();
  }
}
