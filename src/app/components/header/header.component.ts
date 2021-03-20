import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  HostBinding
} from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() showToggle = true;
  @Input() showBranding = false;
  @HostBinding('class.matero-header')
  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavNotice = new EventEmitter<void>();

  private get screenfull(): screenfull.Screenfull {
    return screenfull as screenfull.Screenfull;
  }

  constructor() {}

  ngOnInit() {}

  toggleFullscreen() {
    if (this.screenfull.isEnabled) {
      this.screenfull.toggle();
    }
  }
}
