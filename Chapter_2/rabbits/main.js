const findRabbit = document.querySelector('.btn-find');
const rabbit = document.querySelector('.rabbit');

findRabbit.addEventListener('click', event => {
  rabbit.scrollIntoView({block: 'center', behavior: "smooth"});
})