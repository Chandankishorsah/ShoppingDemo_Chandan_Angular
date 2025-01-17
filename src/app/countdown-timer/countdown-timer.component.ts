import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss'
})
export class CountdownTimerComponent {
  days: string = '02';
  hours: string = '08';
  minutes: string = '00';
  seconds: string = '00';
  countdownInterval: any;

  ngOnInit() {
    this.startCountdown(2 * 24 * 60 * 60 + 8 * 60 * 60); // 2 days and 8 hours in seconds
  }

  startCountdown(totalSeconds: number) {
    let remainingTime = totalSeconds;

    this.countdownInterval = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(this.countdownInterval);
        return;
      }

      remainingTime--;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(remainingTime / (24 * 3600));
      const hrs = Math.floor((remainingTime % (24 * 3600)) / 3600);
      const mins = Math.floor((remainingTime % 3600) / 60);
      const secs = remainingTime % 60;

      // Format with leading zeros
      this.days = this.formatTime(days);
      this.hours = this.formatTime(hrs);
      this.minutes = this.formatTime(mins);
      this.seconds = this.formatTime(secs);
    }, 1000);
  }

  formatTime(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}
