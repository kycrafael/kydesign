
const btn = document.querySelector('.dark-mode-toggle');
const body = document.body;

btn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});


const textEl = document.getElementById("highlighted-text");
const words = textEl.textContent.split(" ");
textEl.innerHTML = words.map(w => `<span>${w}</span>`).join(" ");

const textEl1 = document.getElementById("highlighted-text2");
const words1 = textEl1.textContent.split(" ");
textEl1.innerHTML = words1.map(w => `<span>${w}</span>`).join(" ");


const produtos = document.querySelectorAll('img[data-hover]');
produtos.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.src = img.getAttribute('data-hover');
  });

  img.addEventListener('mouseout', () => {
    img.src = img.getAttribute('data-normal');
  });
});

const buttons = document.querySelectorAll('.navbar2 .navb2');
const shirtsSection = document.querySelector('.produtos');
const pantsSection = document.querySelector('.produtos2');


shirtsSection.style.display = 'one';
pantsSection.style.display = 'one';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const text = button.textContent.trim();


    shirtsSection.style.display = 'none';
    pantsSection.style.display = 'none';

    let targetSection = null;


    if (text === 'Shirts') {
      shirtsSection.style.display = 'grid';
      targetSection = shirtsSection;
    } 
    else if (text === 'Pants') {
      pantsSection.style.display = 'grid';
      targetSection = pantsSection;
    } 
    else if (text === 'Collections') {
      shirtsSection.style.display = 'grid';
      pantsSection.style.display = 'grid';

      targetSection = shirtsSection;
    }

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});
