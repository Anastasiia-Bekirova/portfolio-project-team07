import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const eventHandler = document.querySelector('.wt-btn');

eventHandler.addEventListener('click', function () {
  // Получение данных формы и создание объекта FormData
  const form = document.querySelector('.wt-form');
  const formData = new FormData(form);

  // ! Добавить ссылку API
  // Отправка POST-запроса
  fetch('https://your-server-endpoint.com/api/collaboration', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        // Успешный ответ от сервера - показываем iziToast уведомление и модальное окно
        iziToast.success({
          title: 'Success',
          message: 'Your request has been successfully submitted!',
          position: 'center', // Сообщение по центру
        });
        document.querySelector('.modal').style.display = 'block'; // Показ модального окна
        form.reset(); // Очистка формы
      } else {
        return response.json().then(errorData => {
          throw new Error(errorData.message || 'An error occurred');
        });
      }
    })
    .catch(error => {
      // Показ всплывающего сообщения об ошибке с помощью iziToast
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'bottomCenter', // Сообщение под формой
      });
    });
});

// Закрытие модального окна
document
  .querySelector('.btn-close-modal')
  .addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'none';
  });

// Закрытие модального окна по нажатию на клавишу Esc
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    document.querySelector('.modal').style.display = 'none';
  }
});
