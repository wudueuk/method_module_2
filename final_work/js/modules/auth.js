// Авторизация
import { createAuthModal } from './createElements.js';
import { startTodo } from './todo.js';

export const startAuth = () => {
  const authModal = createAuthModal();
  document.body.append(authModal);

  const form = document.querySelector('#form-auth');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const user = e.target.userName.value;
    if (user !== '') {
      authModal.style.display = 'none';
      if (localStorage.getItem(user) !== null) {
        startTodo(user);
      } else startAuth();
    }
  });


  /* return authModal; */
};

