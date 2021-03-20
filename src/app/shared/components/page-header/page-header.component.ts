import { Component, OnInit, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { MenuService } from '@core/services/menu.service';
import { Router } from '@angular/router';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PageHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() nav: string[] = [];
  @HostBinding('class.matero-page-header')
  @Input()
  get hideBreadcrumb() {
    return this._hideBreadCrumb;
  }
  set hideBreadcrumb(value: boolean) {
    this._hideBreadCrumb = coerceBooleanProperty(value);
  }
  private _hideBreadCrumb = false;

  constructor(private router: Router, private menu: MenuService) {}

  ngOnInit() {
    this.nav = Array.isArray(this.nav) ? this.nav : [];

    if (this.nav.length === 0) {
      this.genBreadcrumb();
    }

    this.title = this.title || this.nav[this.nav.length - 1];
  }

  genBreadcrumb() {
    const routes = this.router.url.slice(1).split('/');
    this.nav = this.menu.getMenuLevel(routes);
    this.nav.unshift('home');
  }
}
