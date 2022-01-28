'use strict';

// Удаление рекламы
const spam = document.querySelector('.ads');
spam.remove();

// получаем верхний список
const booksList = document.querySelector('.items');

// -- Перестановка названий книг --//
// Сначала получаем все изображения для позиционирования
const images = document.querySelectorAll('.item__image');
// Получаем все названия книг
const booksName = document.querySelectorAll('.item__title');
// Теперь переставляем названия книг
images[2].after(booksName[3]);
images[4].after(booksName[4]);
images[5].after(booksName[1]);
booksName[2].textContent = 'This и прототипы объектов';

// -- Работа с содержанием --//
// Получаем содержание всех книг
const booksProps = document.querySelectorAll('.props__list');
// Корректируем содержание
booksProps[0].children[2].after(booksProps[2].children[3]);
booksProps[2].append(booksProps[5].children[8], booksProps[5].children[9]);
booksProps[3].after(booksProps[4]);
booksName[4].after(booksProps[3]);

// Получаем список книг
const books = document.querySelectorAll('.item');
// Переставляем книги по своим местам
booksList.append(books[1], books[2], books[3], books[0], books[4], books[5]);

