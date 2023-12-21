import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерТелефона: DS.attr('number'),
  рабочаяПочта: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  номерТелефона: {
    descriptionKey: 'models.i-i-s-kursovaya-пользователь.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  рабочаяПочта: {
    descriptionKey: 'models.i-i-s-kursovaya-пользователь.validations.рабочаяПочта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kursovaya-пользователь.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПользовательE', 'i-i-s-kursovaya-пользователь', {
    фИО: attr('ФИО', { index: 0 }),
    номерТелефона: attr('Номер телефона', { index: 1 }),
    рабочаяПочта: attr('Рабочая почта', { index: 2 })
  });

  modelClass.defineProjection('ПользовательL', 'i-i-s-kursovaya-пользователь', {
    фИО: attr('ФИО', { index: 0 }),
    номерТелефона: attr('Номер телефона', { index: 1 }),
    рабочаяПочта: attr('Рабочая почта', { index: 2 })
  });
};
