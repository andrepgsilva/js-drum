function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

export{removeTransition};