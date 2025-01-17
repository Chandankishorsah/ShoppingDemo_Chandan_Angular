import { NgFor, NgIf,NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [NgFor,NgIf,NgStyle],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Input() maxStars: number = 5;

  starFillPercent: string[] = [];

  ngOnInit() {
    this.starFillPercent = Array.from({ length: this.maxStars }, (_, index) => {
      const starNumber = index + 1;
      if (this.rating >= starNumber) {
        return 'linear-gradient(90deg, #dc3545 100%, lightgray 0%)'; // Fully filled star
      } else if (this.rating < starNumber - 1) {
        return 'linear-gradient(90deg, lightgray 100%, lightgray 0%)'; // Empty star
      } else {
        const decimalFill = (this.rating - Math.floor(this.rating)) * 100;
        return `linear-gradient(90deg, #a90b0b ${decimalFill}%, lightgray ${decimalFill}%)`; // Partial fill
      }
    });
  }
}
