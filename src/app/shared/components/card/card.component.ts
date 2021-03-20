import { Component, OnInit, Input, ViewEncapsulation, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})

export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() subtitle2: string;
  @Input() subtitleLabel: string;
  @Input() subtitleLabel1: string;
  @Input() imgSrc: string;
  @Input() imgSrcAvatar: string;
  @Input() fxFlex: string;
  @Input() fxFlexMd: string;
  @Input() fxFlexSm: string;
  @Input() routerLink: string;
  // @Input() state: any;
  // @Input() routerUrl: string;

  constructor(){}

  ngOnInit(){

  }
}
