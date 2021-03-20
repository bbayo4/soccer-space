import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

import { SettingsService } from '@core';

const MOBILE_MEDIAQUERY = 'screen and (max-width: 599px)';
const TABLET_MEDIAQUERY = 'screen and (min-width: 600px) and (max-width: 959px)';
const MONITOR_MEDIAQUERY = 'screen and (min-width: 960px)';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  @ViewChild('content', { static: true }) content: MatSidenavContent;

  options = this.settings.getOptions();

  private layoutChangesSubscription: Subscription;

  get isOver(): boolean {
    return this.isMobileScreen;
  }
  private isMobileScreen = false;

  @HostBinding('class.matero-content-width-fix') get contentWidthFix() {
    return (
      this.isContentWidthFixed &&
      this.options.navPos === 'side' &&
      this.options.sidenavOpened &&
      !this.isOver
    );
  }
  private isContentWidthFixed = true;

  @HostBinding('class.matero-sidenav-collapsed-fix') get collapsedWidthFix() {
    return (
      this.isCollapsedWidthFixed &&
      (this.options.navPos === 'top' || (this.options.sidenavOpened && this.isOver))
    );
  }
  private isCollapsedWidthFixed = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private settings: SettingsService,
  ) {
    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_MEDIAQUERY, TABLET_MEDIAQUERY, MONITOR_MEDIAQUERY])
      .subscribe(state => {
        // SidenavOpened must be reset true when layout changes
        this.options.sidenavOpened = true;

        this.isMobileScreen = state.breakpoints[MOBILE_MEDIAQUERY];
        this.options.sidenavCollapsed = state.breakpoints[TABLET_MEDIAQUERY];
        this.isContentWidthFixed = state.breakpoints[MONITOR_MEDIAQUERY];
      });
  }

  ngOnInit() {
    setTimeout(() => (this.isContentWidthFixed = this.isCollapsedWidthFixed = false));
  }

  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
  }

  toggleCollapsed() {
    this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
    this.resetCollapsedState();
  }

  resetCollapsedState(timer = 400) {
    // TODO: Trigger when transition end
    setTimeout(() => {
      this.settings.setNavState('collapsed', this.options.sidenavCollapsed);
    }, timer);
  }

  sidenavCloseStart() {
    this.isContentWidthFixed = false;
  }

  sidenavOpenedChange(isOpened: boolean) {
    this.options.sidenavOpened = isOpened;
    this.settings.setNavState('opened', isOpened);

    this.isCollapsedWidthFixed = !this.isOver;
    this.resetCollapsedState();
  }
}
