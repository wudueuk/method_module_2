import { startAuth } from './modules/auth.js';
import { startTodo } from './modules/todo.js';

const init = () => {
  startAuth();
};

init();
