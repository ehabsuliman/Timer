export function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  
  export function setupEventListeners(timer) {
    document.getElementById('start').addEventListener('click', () => timer.start(updateDisplay));
    document.getElementById('pause').addEventListener('click', () => timer.pause());
    document.getElementById('reset').addEventListener('click', () => timer.reset(updateDisplay));
  }