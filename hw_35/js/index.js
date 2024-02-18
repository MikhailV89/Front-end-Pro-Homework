'use strict';
const ladder = {
  step: 0,
  up() {
    this.step += 1;
    return this;
  },
  down() {
    this.step -= 1;
    return this;
  },
  showStep() {
    return this.step;
  },
};

console.log(ladder.up().up().down().showStep());