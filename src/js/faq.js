import Accordion from 'accordion-js';

function createAccordion({
  containerClass,
  elementClass,
  triggerClass,
  panelClass,
  openOnInit = [],
  duration = 400,
}) {
  return new Accordion(containerClass, {
    elementClass,
    triggerClass,
    panelClass,
    showMultiple: true,
    openOnInit: openOnInit,
    duration: duration,
  });
}
function handleAccordionClick(event, { btnClass, iconClass }) {
  const arrowBtn =
    event.currentTarget.querySelector(btnClass) ||
    event.target.closest(btnClass);
  const arrowIcon = event.currentTarget.querySelector(iconClass);
  if (!arrowBtn) return;
  const isRotated = arrowBtn.classList.contains('rotated');
  if (isRotated) {
    arrowIcon.style.transform = 'rotate(0deg)';
    arrowBtn.classList.remove('rotated');
  } else {
    arrowIcon.style.transform = 'rotate(180deg)';
    arrowBtn.classList.add('rotated');
  }
}

const faqAccordion = document.querySelector('.faq-items');
const options = {
  containerClass: '.faq-items',
  elementClass: 'faq-item',
  triggerClass: 'faq-title',
  panelClass: 'faq-descr',
};
const clickOptions = {
  btnClass: '.faq-acordeon-btn',
  iconClass: '.modal-btn-icon',
};
const faqAccordionTriggers = faqAccordion.querySelectorAll('.faq-title');
faqAccordionTriggers.forEach(accordionTrigger => {
  accordionTrigger.addEventListener('click', event => {
    handleAccordionClick(event, clickOptions);
  });
});
createAccordion(options);
