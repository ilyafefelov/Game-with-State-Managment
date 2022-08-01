export default class InputHandler {
  constructor(gameWidth, gameHeight) {
    this.lastKey = "";
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.lastKey = "PRESS left";
          //   console.log(this.lastKey);
          break;
        case "ArrowRight":
          this.lastKey = "PRESS right";
          //   console.log(this.lastKey);
          break;
      }
    });
    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.lastKey = "RELEASE left";
          //   console.log(this.lastKey);
          break;
        case "ArrowRight":
          this.lastKey = "RELEASE right";
          //   console.log(this.lastKey);
          break;
      }
    });
  }
}
