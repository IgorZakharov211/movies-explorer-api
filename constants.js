const notFoundMovie = 'Фильм по заданному id не найден';
const forbiddenMovie = 'Невозможно удалить чужой фильм';

const conflictEmail = 'Данный Email занят';
const notFoundUser = 'Пользователь по заданному id не найден';
const invalidId = 'Невалидний id';

const authRequired = 'Необходима авторизация';

const serverError = 'На сервере произошла ошибка';

const incorrEmailOrPassword = 'Неправильные почта или пароль';

const invalidEmail = 'Поле "email" должно быть валидным email адресом';
const requiredEmail = 'Поле "email" обязательно для заполнения';
const emptyEmail = 'Поле "email" не должно быть пустым';

const minName = 'Минимальная длина поля "name" - 2';
const maxName = 'Максимальная длина поля "name" - 30';
const requiredName = 'Поле "name" обязательно для заполнения';

const requiredPassword = 'Поле "password" обязательно для заполнения';
const emptyPassword = 'Поле "password" не должно быть пустым';

const requiredCountry = 'Поле "country" обязательно для заполнения';
const emptyCountry = 'Поле "country" не должно быть пустым';

const requiredDirector = 'Поле "director" обязательно для заполнения';
const emptyDirector = 'Поле "director" не должно быть пустым';

const requiredDuration = 'Поле "duration" обязательно для заполнения';
const emptyDuration = 'Поле "duration" не должно быть пустым';

const requiredYear = 'Поле "year" обязательно для заполнения';
const emptyYear = 'Поле "year" не должно быть пустым';

const requiredDescription = 'Поле "description" обязательно для заполнения';
const emptyDescription = 'Поле "description" не должно быть пустым';

const invalidImage = 'Поле "image" должно быть валидным url-адресом';
const requiredImage = 'Поле "image" обязательно для заполнения';
const emptyImage = 'Поле "Image" не должно быть пустым';

const invalidTrailer = 'Поле "trailer" должно быть валидным url-адресом';
const requiredTrailer = 'Поле "trailer" обязательно для заполнения';
const emptyTrailer = 'Поле "trailer" не должно быть пустым';

const invalidThumbnail = 'Поле "thumbnail" должно быть валидным url-адресом';
const requiredThumbnail = 'Поле "thumbnail" обязательно для заполнения';
const emptyThumbnail = 'Поле "thumbnail" не должно быть пустым';

const invalidMovieId = 'Невалидный id поля "movieId"';
const requiredMovieId = 'Поле "movieId" обязательно для заполнения';
const emptyMovieId = 'Поле "movieId" не должно быть пустым';

const requiredNameRU = 'Поле "nameRU" обязательно для заполнения';
const emptyNameRU = 'Поле "nameRU" не должно быть пустым';

const requiredNameEN = 'Поле "nameEN" обязательно для заполнения';
const emptyNameEN = 'Поле "nameEN" не должно быть пустым';

module.exports = {
  notFoundMovie,
  forbiddenMovie,
  conflictEmail,
  notFoundUser,
  invalidId,
  authRequired,
  serverError,
  incorrEmailOrPassword,
  invalidEmail,
  requiredEmail,
  emptyEmail,
  minName,
  maxName,
  requiredName,
  requiredPassword,
  emptyPassword,
  requiredCountry,
  emptyCountry,
  requiredDirector,
  emptyDirector,
  requiredDuration,
  emptyDuration,
  requiredYear,
  emptyYear,
  requiredDescription,
  emptyDescription,
  invalidImage,
  requiredImage,
  emptyImage,
  invalidTrailer,
  requiredTrailer,
  emptyTrailer,
  invalidThumbnail,
  requiredThumbnail,
  emptyThumbnail,
  invalidMovieId,
  requiredMovieId,
  emptyMovieId,
  requiredNameRU,
  emptyNameRU,
  requiredNameEN,
  emptyNameEN,
};
