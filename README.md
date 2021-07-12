# movies-explorer-api

### Обзор
Проект представляет собой сервер под будущий сайт movies-explorer.

**Роуты для пользователя:**
* PATCH /users/me — обновляет профиль;
* GET /users/me — возвращает информацию о пользователе.

**Роуты для фильмов**
* GET /movies — возвращает все фильмы;
* POST /movies — создаёт фильм;
* DELETE /movies/:movieId — удаляет фильм по идентификатору.

**Роуты авторизации**
* POST /signup — создать пользователя;
* POST /signin — войти.


**В ходе разработки были использованы:**

* [**Node.js**](https://nodejs.org/);
* [**Express**](https://expressjs.com/);
* [**MongoDB**](https://www.mongodb.com/); 
* В ходе разработки был использован линтер  **ESLint** *airbnb-base*;
* Использован hot reload  **nodemon**;

## Ссылка на проект: 

*https://api.zakharovigor.ru/*
