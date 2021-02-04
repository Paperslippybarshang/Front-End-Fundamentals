const target = document.querySelector('.target');
const lineX = document.querySelector('.line_x');
const lineY = document.querySelector('.line_y');
const coordinates = document.querySelector('.coordinates');
const targetRect = target.getBoundingClientRect();
const halfWidth = targetRect.width/2;
const halfHeight = targetRect.height/2;

// const mouseMove = (event) => {
//   target.style.left = event.pageX + 'px';
//   target.style.top = event.pageY + 'px';
// }

// target.addEventListener("mousemove", mouseMove);

document.addEventListener('mousemove', event => {
  const x = event.clientX;
  const y = event.clientY;
  lineX.style.transform = `translate(0, ${y}px)`
  lineY.style.transform = `translate(${x}px, 0)`
  target.style.transform = `translate(${x-halfWidth}px, ${y-halfHeight}px)`
  coordinates.style.transform = `translate(${x}px, ${y}px)`

  // target.style.top = `${y}px`
  // target.style.left = `${x}px`
  // coordinates.style.top = `${y}px`
  // coordinates.style.left = `${x}px`
  coordinates.innerHTML = `${x}px, ${y}px`
})