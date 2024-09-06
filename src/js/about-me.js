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
      if (el !== activeElement) {
        el.style.marginBottom = '0';
      }
    });

    if (activeElement) {
      const activePanel = activeElement.querySelector('.about-me-acc-el-descr-frame');
      activeElement.style.marginBottom = `${activePanel.scrollHeight}px`;
    }
  };

  document.querySelectorAll('.about-me-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', adjustMargins);
  });
});
