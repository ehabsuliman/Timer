import { Timer } from './timer.js';
import { updateDisplay, setupEventListeners } from './ui.js';
import { defaultWorkDuration, defaultBreakDuration } from './settings.js';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const timer = new Timer(defaultWorkDuration, defaultBreakDuration);
  updateDisplay(timer.currentTime);
  setupEventListeners(timer);
});