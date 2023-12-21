import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovayaКлиентLForm from './forms/i-i-s-kursovaya-клиент-l';
import IISKursovayaМодельLForm from './forms/i-i-s-kursovaya-модель-l';
import IISKursovayaОтветственныйLForm from './forms/i-i-s-kursovaya-ответственный-l';
import IISKursovayaПользовательLForm from './forms/i-i-s-kursovaya-пользователь-l';
import IISKursovayaТипLForm from './forms/i-i-s-kursovaya-тип-l';
import IISKursovayaФилиалLForm from './forms/i-i-s-kursovaya-филиал-l';
import IISKursovayaКлиентEForm from './forms/i-i-s-kursovaya-клиент-e';
import IISKursovayaМодельEForm from './forms/i-i-s-kursovaya-модель-e';
import IISKursovayaОтветственныйEForm from './forms/i-i-s-kursovaya-ответственный-e';
import IISKursovayaПользовательEForm from './forms/i-i-s-kursovaya-пользователь-e';
import IISKursovayaТипEForm from './forms/i-i-s-kursovaya-тип-e';
import IISKursovayaФилиалEForm from './forms/i-i-s-kursovaya-филиал-e';
import IISKursovayaВозвратКлиентомModel from './models/i-i-s-kursovaya-возврат-клиентом';
import IISKursovayaКлиентModel from './models/i-i-s-kursovaya-клиент';
import IISKursovayaМодельModel from './models/i-i-s-kursovaya-модель';
import IISKursovayaОтветственныйModel from './models/i-i-s-kursovaya-ответственный';
import IISKursovayaПользовательModel from './models/i-i-s-kursovaya-пользователь';
import IISKursovayaРезервОборудModel from './models/i-i-s-kursovaya-резерв-оборуд';
import IISKursovayaТипModel from './models/i-i-s-kursovaya-тип';
import IISKursovayaФилиалModel from './models/i-i-s-kursovaya-филиал';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-возврат-клиентом': IISKursovayaВозвратКлиентомModel,
    'i-i-s-kursovaya-клиент': IISKursovayaКлиентModel,
    'i-i-s-kursovaya-модель': IISKursovayaМодельModel,
    'i-i-s-kursovaya-ответственный': IISKursovayaОтветственныйModel,
    'i-i-s-kursovaya-пользователь': IISKursovayaПользовательModel,
    'i-i-s-kursovaya-резерв-оборуд': IISKursovayaРезервОборудModel,
    'i-i-s-kursovaya-тип': IISKursovayaТипModel,
    'i-i-s-kursovaya-филиал': IISKursovayaФилиалModel
  },

  'application-name': 'Kursovaya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya',
          title: 'Kursovaya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'учет-резервного-оборудования': {
          caption: 'Учет резервного оборудования',
          title: 'Учет резервного оборудования',
          'i-i-s-kursovaya-филиал-l': {
            caption: 'Филиал',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-kursovaya-пользователь-l': {
            caption: 'Пользователь',
            title: 'Пользователь'
          },
          'i-i-s-kursovaya-ответственный-l': {
            caption: 'Ответственный',
            title: 'Ответственный'
          },
          'i-i-s-kursovaya-модель-l': {
            caption: 'Модель',
            title: 'Модель'
          },
          'i-i-s-kursovaya-тип-l': {
            caption: 'Тип',
            title: 'Тип'
          },
          'i-i-s-kursovaya-клиент-l': {
            caption: 'Клиент',
            title: 'Клиент'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya-клиент-l': IISKursovayaКлиентLForm,
    'i-i-s-kursovaya-модель-l': IISKursovayaМодельLForm,
    'i-i-s-kursovaya-ответственный-l': IISKursovayaОтветственныйLForm,
    'i-i-s-kursovaya-пользователь-l': IISKursovayaПользовательLForm,
    'i-i-s-kursovaya-тип-l': IISKursovayaТипLForm,
    'i-i-s-kursovaya-филиал-l': IISKursovayaФилиалLForm,
    'i-i-s-kursovaya-клиент-e': IISKursovayaКлиентEForm,
    'i-i-s-kursovaya-модель-e': IISKursovayaМодельEForm,
    'i-i-s-kursovaya-ответственный-e': IISKursovayaОтветственныйEForm,
    'i-i-s-kursovaya-пользователь-e': IISKursovayaПользовательEForm,
    'i-i-s-kursovaya-тип-e': IISKursovayaТипEForm,
    'i-i-s-kursovaya-филиал-e': IISKursovayaФилиалEForm
  },

});

export default translations;
