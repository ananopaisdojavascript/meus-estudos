import { Component } from '@angular/core';

@Component({
  selector: 'app-random-background-color',
  templateUrl: './random-background-color.component.html',
  styleUrls: ['./random-background-color.component.css']
})
export class RandomBackgroundColorComponent {

  nameColor: string = ''

  color: string[] = [
    "#55efc4", "#00b894", "#ffeaa7", "#fdcb6e", "#81ecec", "#00cec9", "#fab1a0", "#e17055", "#74b9ff", "#0984e3", "#ff7675", "#d63031", "#a29bfe", "#6c5ce7", "#fd79a8", "#e84393", "#dfe6e9", "#b2bec3", "#636e72", "#636e72", "#2d3436"
  ]

  randomBackgroundColor(): void {
    const random = this.color[Math.floor(Math.random() * this.color.length)]
    this.nameColor = random
  }

}
