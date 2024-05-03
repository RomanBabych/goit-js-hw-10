import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stateInput = document.querySelector('input[name="state"]:checked');

  const delay = parseInt(delayInput.value);
  const state = stateInput.value;

  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } else {
      setTimeout(() => {
        reject(delay);
      }, delay);
    }
  });

  promise.then((delay) => {
    iziToast.success({
      message: `✅ Fulfilled promise in ${delay}ms`,
    });
  }).catch((delay) => {
    iziToast.error({
      message: `❌ Rejected promise in ${delay}ms`,
    });
  });
});