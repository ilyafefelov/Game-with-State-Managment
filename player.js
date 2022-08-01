import {
  StandingLeft,
  StandingRight,
  SittingLeft,
  SittingRight,
  RunningLeft,
  RunningRight,
  JumpingLeft,
  JumpingRight,
  FallingLeft,
  FallingRight,
} from "./state.js";
export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.states = [
      new StandingLeft(this),
      new StandingRight(this),
      new SittingLeft(this),
      new SittingRight(this),
      new RunningLeft(this),
      new RunningRight(this),
      new JumpingLeft(this),
      new JumpingRight(this),
      new FallingLeft(this),
      new FallingRight(this),
    ];
    this.currentState = this.states[1];

    this.image = document.getElementById("dogImage");
    this.width = 200;
    this.height = 181.83;
    this.x = this.gameWidth / 2 - this.width / 2;
    this.y = this.gameHeight - this.height;
    this.vy = 0;
    this.weight = 1;
    this.frameX = 0;
    this.maxFrame = 5;
    this.frameY = 0;
    this.speed = 0;
    this.maxSpeed = 10;
    this.fps = 20;
    this.frameTimer = 0;
    this.frameInterval = 1000 / this.fps;
    // enter initial state
    this.setState(1);
  }
  draw(context, deltaTime) {
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
    context.drawImage(
      this.image,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update(input) {
    // update state in reaction to input
    this.currentState.handleInput(input);
    // horizontal movement
    this.x += this.speed;
    if (this.x <= 0) this.x = 0;
    if (this.x >= this.gameWidth - this.width)
      this.x = this.gameWidth - this.width;
    // vertical movement
    this.y += this.vy;
    if (!this.onGround()) {
      this.vy += this.weight;
    } else {
      this.vy = 0;
    }
    if (this.y > this.gameHeight) this.y = this.gameHeight - this.height;
  }

  setState(state) {
    // console.log("state:", this.currentState);
    // console.log("player:", this);
    this.currentState = this.states[state];
    // console.log("state2:", this.currentState);
    // console.log("state2 player:", this.currentState.player);
    this.currentState.enter();
  }
  onGround() {
    return this.y >= this.gameHeight - this.height;
  }
}
