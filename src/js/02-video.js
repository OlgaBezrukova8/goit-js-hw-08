import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const TIME_KEY = 'videoplayer-current-time';

const test = data => localStorage.setItem(TIME_KEY, data.seconds);
player.on('timeupdate', throttle(test, 1000));
player.setCurrentTime(localStorage.getItem(TIME_KEY));
