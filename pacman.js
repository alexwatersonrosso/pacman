var pos = 0;
    const pacArray = [
        ['PacMan1.png', 'PacMan2.png'],
        ['PacMan3.png', 'PacMan4.png'],
    ];
    var direction = 0;
var b = 0;
const pacMen = [];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  }; 
}
// Factory to make a PacMan
function makePac() {
  // returns an object with values scaled {x: 33, y: 21}
  let velocity = setToRandom(10);
  let position = setToRandom(10);
  // Add image to div id = game
  let game = document.getElementById("game");
  let newimg = document.createElement("img");
    newimg.style.position = "absolute";
    newimg.src = "./PacMan1.png";
    newimg.width = 200;
     newimg.style.left = position.x;
    newimg.style.top = position.y;
    game.appendChild(newimg);
  // new style of creating an object
  return {
    position,
    velocity,
    newimg,
  };
}
let images;

function update() {
  //loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;

    if (item.velocity.x > 0) images = pacArray[0];
    if (item.velocity.x < 0) images = pacArray[1];
    item.position.y += item.velocity.y;
    let selected = "";
    if (b === 0) {
      selected = images[0];
    } else {
      selected = images[1];
    }
    item.newimg.src = selected;

    if (b === 0) b = 1;
    else b = 0;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  if (
    item.position.x + item.velocity.x + item.newimg.width > 400 ||
    item.position.x + item.velocity.x < 150
  )
    item.velocity.x = -item.velocity.x;
  if (
    item.position.y + item.velocity.y + item.newimg.height > 400 ||
    item.position.y + item.velocity.y < 150
  )
    item.velocity.y = -item.velocity.y;
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}
