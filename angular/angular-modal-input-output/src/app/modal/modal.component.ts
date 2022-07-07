import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title: string;
  @Input() text: string;
  @Input() modal: boolean;
  @Output() openModal: EventEmitter<any> = new EventEmitter();
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  open() {
    this.openModal.emit();
  }

  close() {
    this.closeModal.emit();
  }
}
