const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const colorBtn = document.getElementById("color")

const decBtn = document.getElementById("decrease")
const increBtn = document.getElementById("increase")

const textSize = document.getElementById
("size")

const clearBtn = document.getElementById("clear")


let size = 10;
let color = "black";
let isPressed = false;
let x;
let y;
textSize.innerText ="" + size


decBtn.addEventListener("click", ()=>{
    size--
    if(size < 1){
        size = 1
    }
    textSize.innerText =size
    console.log(size)
})
increBtn.addEventListener("click", ()=>{
    size++
    if(size > 20){
        size = 20
    }
    textSize.innerText = size
    console.log(size)
})

clearBtn.addEventListener("click", ()=>{
    window.location.reload()
})


colorBtn.addEventListener("input", (e)=>{
    const colors =e.target.value 
    color = colors
    console.log(colors)
})


canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
drawCircle();
drawLine();
