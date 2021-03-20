import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PreloaderService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'EPL';
  constructor(private preloader: PreloaderService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
