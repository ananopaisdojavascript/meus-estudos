import { Component, Input} from '@angular/core';
import { SpinnerHandlerService } from 'src/app/core/services/spinner-handler.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  spinnerActive: boolean = true;

  constructor(public spinner: SpinnerHandlerService) {
    this.spinner.showSpinner.subscribe(this.showSpinner.bind(this))
  }

  showSpinner = (state: boolean) => {
    this.spinnerActive = state;
  }

}
