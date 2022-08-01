export function drawStatus(context, input) {
  context.font = "30px Arial";
  context.fillText("Last key: " + input.lastKey, 20, 50);
}
