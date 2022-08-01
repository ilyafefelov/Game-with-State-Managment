export const states = {
  STANDING_LEFT: 0,
  STANDING_RIGHT: 1,
};

class State {
  constructor(state) {
    this.state = state;
  }
}

export class StandingLeft extends State {
  constructor(player) {
    super("STANDING_LEFT");
    // console.log("this:", player);
    this.player = player;
  }
  enter() {
    this.player.FrameY = 1;
  }
  handleInput(input) {
    if (input === "PRESS right") this.player.setState(states.STANDING_RIGHT);
  }
}
export class StandingRight extends State {
  constructor(player) {
    super("STANDING_RIGHT");
    this.player = player;
  }
  enter() {
    this.player.FrameY = 0;
  }
  handleInput(input) {
    if (input === "PRESS left") this.player.setState(states.STANDING_LEFT);
  }
}
