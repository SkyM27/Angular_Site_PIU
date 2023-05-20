import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public url?: string;
  home = false;
  constructor (private location: Location, private router: Router) {

  }

  toggle = false;

  switchToggle() {
    this.toggle = !this.toggle;
  }

  hoverSound!: Howl;

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      if(this.location.path() != ''){
        this.url = this.location.path().replace('/', '');
        this.url = this.url[0].toUpperCase() + this.url.substring(1).toLowerCase();
      }
      if (this.location.path() === '')
      {
        this.home = true;
      }
      else{
        this.home = false;
      }
    });
  }

  GoToInventory(){
    this.router.navigate(['inventory'])
  }

  ngOnDestroy(): void {
    this.hoverSound?.stop();
  }
  playHoverSound(): void {
    this.hoverSound?.play();
  }
}
