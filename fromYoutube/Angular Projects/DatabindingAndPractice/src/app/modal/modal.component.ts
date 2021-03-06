import { Component } from '@angular/core';
import { PostsServiceService } from '../posts-service.service';

@Component({
  selector: 'popup-window',
  template: `
    <div
      [ngStyle]="{ display: pToggle ? 'block' : 'none' }"
      (click)="closePopup()"
      class="backdrop"
    >
      <div class="modal-container" (click)="openPopupModal(true)">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(private service: PostsServiceService) {}
  pToggle = false;
  openPopupModal(popupToggle) {
    console.log(popupToggle);
    this.pToggle = this.service.openPopupFunc();
  }

  closePopup() {
    this.pToggle = this.service.openPopupFunc();
  }
}
