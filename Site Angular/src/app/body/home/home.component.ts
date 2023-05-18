import { Component, OnDestroy} from '@angular/core';
import { OnInit } from '@angular/core';
import { toPath } from 'svg-points';
import { Howl, Howler } from 'howler';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  public path1?: string;
  public path2?: string;
  public path3?: string;

  hoverSound!: Howl;

  ngOnInit(): void {
    this.path1 = toPath({
      type: 'circle',
      cx: 50,
      cy: 50,
      r: 10
    });

    this.path2 = toPath({
      type: 'line',
      x1: 50,
      x2: 50,
      y1: 50,
      y2: 1000
    });

    this.path3 = toPath({
      type: 'circle',
      cx: 50,
      cy: 1000,
      r: 10
    });

    this.hoverSound = new Howl({
      src: ['../../../assets/sounds/sounds1.wav']
    });
  }

  ngOnDestroy(): void {
    // Stop the hover sound when the component is destroyed
    this.hoverSound?.stop();
  }

  playHoverSound(): void {
    this.hoverSound?.play();
  }
}



