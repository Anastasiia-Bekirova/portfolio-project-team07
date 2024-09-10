import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import validator from 'validator';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.wt-form');
  const emailInput = document.querySelector('.wt-input-js');
  const emailMessage = document.querySelector('.message-input');
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.btn-close-modal');

  if (!form || !emailInput || !emailMessage || !modal || !closeModal) {
    console.error('One or more required elements are missing.');
    return;
  }

  // Обработчик ввода для emailInput
  emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    const emailValid = validator.isEmail(email);

    if (email === '') {
      // Очистка сообщения и стилей, если поле пустое
      emailMessage.textContent = '';
      emailMessage.className = 'message-input';
      emailInput.classList.remove('error', 'success');
    } else if (!emailValid) {
      emailMessage.textContent = 'Invalid email, try again';
      emailMessage.className = 'message-input error';
      emailInput.classList.add('error');
      emailInput.classList.remove('success');
    } else {
      emailMessage.textContent = 'Success!';
      emailMessage.className = 'message-input success';
      emailInput.classList.add('success');
      emailInput.classList.remove('error');
    }
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const email = emailInput.value;
    const emailValid = validator.isEmail(email);

    if (!emailValid) {
      emailMessage.textContent = 'Invalid email, try again';
      emailMessage.className = 'message-input error';
      emailInput.classList.add('error');
      emailInput.classList.remove('success');
      return;
    }

    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api-docs',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            comments: form.querySelector('input[type="text"]').value,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      // Очистка формы, сообщения и стилей после успешной отправки
      form.reset();
      emailMessage.textContent = '';
      emailMessage.className = 'message-input';
      emailInput.classList.remove('error', 'success');

      openModal();
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again.',
      });
    }
  });
  // Запрет скролла при открытии модалки
  function openModal() {
    if (modal) {
      modal.classList.add('active');
      document.body.classList.add('no-scroll');
    }
  }
  // Возврат скролла при закрытии модалки
  function closeModalFunction() {
    if (modal) {
      modal.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  }

  if (closeModal) {
    closeModal.addEventListener('click', closeModalFunction);
  }

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        closeModalFunction();
      }
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal) {
      closeModalFunction();
    }
  });
});
