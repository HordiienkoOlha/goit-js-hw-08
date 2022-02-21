import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const playerRef = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(STORAGE_KEY);

if (currentTime) {
    playerRef.setCurrentTime(currentTime);
}

function timeUpdate() {
    playerRef.getCurrentTime().then(function(seconds) {
        localStorage.setItem(STORAGE_KEY, seconds);
        
    }).catch(function(error) {
        console.log("Error") 
    });
}
playerRef.on('timeupdate', throttle(timeUpdate, 1000));
