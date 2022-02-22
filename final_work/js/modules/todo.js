import { createApp } from './createElements.js';

export const startTodo = user => {
  const { formAddTodo, tableBody } = createApp();

  formAddTodo.input.addEventListener('input', () => {
    if (formAddTodo.input.value !== '') {
      formAddTodo.buttonSubmit.classList.remove('disabled');
    } else {
      if (!formAddTodo.buttonSubmit.classList.contains('disabled')) {
        formAddTodo.buttonSubmit.classList.add('disabled');
      }
    }
  });

  formAddTodo.form.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target.newitem.value !== '') {
      localStorage.setItem(user, e.target.newitem.value);
      formAddTodo.buttonSubmit.classList.add('disabled');
      formAddTodo.form.reset();
    }
  });



};
