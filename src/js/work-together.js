import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
    const emailValid = emailInput.checkValidity();
    const emailEndsWithGmail = email.endsWith('@gmail.com');

    if (email === '') {
      // Очистка сообщения и стилей, если поле пустое
      emailMessage.textContent = '';
      emailMessage.className = 'message-input';
      emailInput.classList.remove('error', 'success');
    } else if (!emailValid || !emailEndsWithGmail) {
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
    const emailValid = emailInput.checkValidity();
    const emailEndsWithGmail = email.endsWith('@gmail.com');

    if (!emailValid || !emailEndsWithGmail) {
      emailMessage.textContent = 'Invalid email, try again';
      emailMessage.className = 'message-input error';
      emailInput.classList.add('error');
      emailInput.classList.remove('success');
      return;
    }

    emailMessage.textContent = 'Success!';
    emailMessage.className = 'message-input success';
    emailInput.classList.add('success');
    emailInput.classList.remove('error');

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

      form.reset();
      openModal();
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again.',
      });
    }
  });

  function openModal() {
    if (modal) {
      modal.style.display = 'flex';
    }
  }

  function closeModalFunction() {
    if (modal) {
      modal.style.display = 'none';
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
