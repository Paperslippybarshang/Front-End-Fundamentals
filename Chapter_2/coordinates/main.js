const target = document.querySelector('.target');
const lineX = document.querySelector('.line_x');
const lineY = document.querySelector('.line_y');
const coordinates = document.querySelector('.coordinates');

// const mouseMove = (event) => {
//   target.style.left = event.pageX + 'px';
//   target.style.top = event.pageY + 'px';
// }

// target.addEventListener("mousemove", mouseMove);

document.addEventListener('mousemove', event => {
  const x = event.clientX;
  const y = event.clientY;
  lineX.style.top = `${y}px`
  lineY.style.left = `${x}px`
  target.style.top = `${y}px`
  target.style.left = `${x}px`
  coordinates.style.top = `${y}px`
  coordinates.style.left = `${x}px`
  coordinates.innerHTML = `${x}px, ${y}px`
})