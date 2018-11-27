import {playSound} from './play-sound.js';
import {removeTransition} from './remove-transition.js';

window.addEventListener('load', () => {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    window.addEventListener('keydown', (event) => playSound(event));
});