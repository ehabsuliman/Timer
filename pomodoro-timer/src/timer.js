export class Timer {
    constructor(workDuration = 25, breakDuration = 5) {
      this.workDuration = workDuration * 60;
      this.breakDuration = breakDuration * 60;
      this.currentTime = this.workDuration;
      this.isWorkMode = true;
      this.interval = null;
    }
  
    start(callback) {
      if (!this.interval) {
        this.interval = setInterval(() => {
          this.currentTime--;
          callback(this.currentTime);
          if (this.currentTime === 0) {
            this.switchMode(callback);
          }
        }, 1000);
      }
    }
  
    pause() {
      clearInterval(this.interval);
      this.interval = null;
    }
  
    reset(callback) {
      this.pause();
      this.currentTime = this.isWorkMode ? this.workDuration : this.breakDuration;
      callback(this.currentTime);
    }
  
    switchMode(callback) {
      this.isWorkMode = !this.isWorkMode;
      this.currentTime = this.isWorkMode ? this.workDuration : this.breakDuration;
      this.playNotification();
      callback(this.currentTime);
    }
  
    playNotification() {
      const audio = new Audio('./assets/notification.mp3');
      audio.play();
    }
  }