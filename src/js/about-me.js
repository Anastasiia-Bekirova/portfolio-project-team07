import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('.about-me-acc', {
    duration: 300,
    showMultiple: false,
    collapse: true,
    elementClass: 'about-me-acc-el',
    triggerClass: 'about-me-acc-el-trigger',
    panelClass: 'about-me-acc-el-descr-frame',
    activeClass: 'active',
    openOnInit: [0],
  });

  const adjustMargins = () => {
    const activeElement = document.querySelector('.about-me-acc-el.active');
    const accordionElements = document.querySelectorAll('.about-me-acc-el');

    accordionElements.forEach(el => {
      const arrowDown = el.querySelector('.arr-down');
      const arrowUp = el.querySelector('.arr-up');

      if (el !== activeElement) {
        el.style.marginBottom = '0';
        arrowDown.classList.remove('is-hidden');
        arrowUp.classList.add('is-hidden');
      } else {
        const activePanel = activeElement.querySelector(
          '.about-me-acc-el-descr-frame'
        );
        const activeArrowDown = activeElement.querySelector('.arr-down');
        const activeArrowUp = activeElement.querySelector('.arr-up');

        activeElement.style.marginBottom = `${activePanel.scrollHeight}px`;
        activeArrowDown.classList.add('is-hidden');
        activeArrowUp.classList.remove('is-hidden');
      }
    });
  };

  document.querySelectorAll('.about-me-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', adjustMargins);
  });
});
