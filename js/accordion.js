let accordionItems = document.getElementsByClassName('accordion__item');

for (let i = 0; i < accordionItems.length; i++) {
  let item = accordionItems[i];
  let header = item.getElementsByClassName('accordion__header')[0];
  header.addEventListener('click', toggleAccordion);
}

function toggleAccordion() {
  let content = this.nextElementSibling;
  this.classList.toggle('active');
  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  }
}
