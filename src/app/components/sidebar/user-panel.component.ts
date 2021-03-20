import { Component } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  template: `
    <div class="matero-user-panel" fxLayout="column" fxLayoutAlign="center center">
      <img class="soccer-avatar" src="assets/images/soccer-ball.png" alt="">
    </div>
  `,
  styleUrls: ['./user-panel.component.css'],
})
export class UserPanelComponent {

  constructor() {
  }
}
