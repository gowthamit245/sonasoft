import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoUrl : string = "assets/videos/sona.mp4";
  @ViewChild('videoPlayer', {static: false}) videoplayer: ElementRef;
    toggleVideo(event: any) {
      console.log(this.videoplayer);
        this.videoplayer.nativeElement.play();
    }
  constructor() {
    
   }

  ngOnInit() {
  }

}
