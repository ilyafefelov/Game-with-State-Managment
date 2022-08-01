import Player from "./player.js";
import InputHandler from "./input.js";
import { drawStatus } from "./utils.js";

window.addEventListener("load", function () {
  console.log("loaded script.js");

  const loading = document.getElementById("loading");
  loading.style.display = "none";
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const player = new Player(canvas.width, canvas.height);
  console.log("player", player.setState);
  //   player.setState(1);

  const input = new InputHandler(canvas.width, canvas.height);

  let lastTime = 0;
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update(input.lastKey);
    player.draw(ctx, deltaTime);
    drawStatus(ctx, input, player);
    requestAnimationFrame(animate);
  }
  animate(0);
});
