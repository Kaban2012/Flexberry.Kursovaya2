import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номерТелефона: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-kursovaya-клиент.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-kursovaya-клиент.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kursovaya-клиент.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-kursovaya-клиент', {
    фИО: attr('ФИО', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    номерТелефона: attr('Номер телефона', { index: 2 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-kursovaya-клиент', {
    фИО: attr('ФИО', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    номерТелефона: attr('Номер телефона', { index: 2 })
  });
};
