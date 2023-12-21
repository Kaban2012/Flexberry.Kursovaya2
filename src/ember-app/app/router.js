import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-клиент-l');
  this.route('i-i-s-kursovaya-клиент-e',
  { path: 'i-i-s-kursovaya-клиент-e/:id' });
  this.route('i-i-s-kursovaya-клиент-e.new',
  { path: 'i-i-s-kursovaya-клиент-e/new' });
  this.route('i-i-s-kursovaya-модель-l');
  this.route('i-i-s-kursovaya-модель-e',
  { path: 'i-i-s-kursovaya-модель-e/:id' });
  this.route('i-i-s-kursovaya-модель-e.new',
  { path: 'i-i-s-kursovaya-модель-e/new' });
  this.route('i-i-s-kursovaya-ответственный-l');
  this.route('i-i-s-kursovaya-ответственный-e',
  { path: 'i-i-s-kursovaya-ответственный-e/:id' });
  this.route('i-i-s-kursovaya-ответственный-e.new',
  { path: 'i-i-s-kursovaya-ответственный-e/new' });
  this.route('i-i-s-kursovaya-пользователь-l');
  this.route('i-i-s-kursovaya-пользователь-e',
  { path: 'i-i-s-kursovaya-пользователь-e/:id' });
  this.route('i-i-s-kursovaya-пользователь-e.new',
  { path: 'i-i-s-kursovaya-пользователь-e/new' });
  this.route('i-i-s-kursovaya-тип-l');
  this.route('i-i-s-kursovaya-тип-e',
  { path: 'i-i-s-kursovaya-тип-e/:id' });
  this.route('i-i-s-kursovaya-тип-e.new',
  { path: 'i-i-s-kursovaya-тип-e/new' });
  this.route('i-i-s-kursovaya-филиал-l');
  this.route('i-i-s-kursovaya-филиал-e',
  { path: 'i-i-s-kursovaya-филиал-e/:id' });
  this.route('i-i-s-kursovaya-филиал-e.new',
  { path: 'i-i-s-kursovaya-филиал-e/new' });
});

export default Router;
