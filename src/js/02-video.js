import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const time = 'videoplayer-current-time';

timeset();
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(time, seconds);
}

function timeset() {
  if (!localStorage.getItem(time)) {
    return;
  }
  player.setCurrentTime(localStorage.getItem(time));
}
