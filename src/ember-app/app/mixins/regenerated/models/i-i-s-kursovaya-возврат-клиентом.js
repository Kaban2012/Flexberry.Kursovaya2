import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПоступления: DS.attr('date'),
  датаУстановки: DS.attr('date'),
  причинаВозврата: DS.attr('string'),
  серийныйНомер: DS.attr('string'),
  клиент: DS.belongsTo('i-i-s-kursovaya-клиент', { inverse: null, async: false }),
  модель: DS.belongsTo('i-i-s-kursovaya-модель', { inverse: null, async: false }),
  тип: DS.belongsTo('i-i-s-kursovaya-тип', { inverse: null, async: false }),
  филиал: DS.belongsTo('i-i-s-kursovaya-филиал', { inverse: 'возвратКлиентом', async: false })
});

export let ValidationRules = {
  датаПоступления: {
    descriptionKey: 'models.i-i-s-kursovaya-возврат-клиентом.validations.датаПоступления.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаУстановки: {
    descriptionKey: 'models.i-i-s-kursovaya-возврат-клиентом.validations.датаУстановки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  причинаВозврата: {
    descriptionKey: 'models.i-i-s-kursovaya-возврат-клиентом.validations.причинаВозврата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серийныйНомер: {
    descriptionKey: 'models.i-i-s-kursovaya-возврат-клиентом.validations.серийныйНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya-возврат-клиентом.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  модель: {
    descriptionKey: 'models.i-i-s-kursovaya-возврат-клиентом.validations.модель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-kursovaya-возврат-клиентом.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  филиал: {
    descriptionKey: 'models.i-i-s-kursovaya-возврат-клиентом.validations.филиал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВозвратКлиентомE', 'i-i-s-kursovaya-возврат-клиентом', {
    датаПоступления: attr('Дата поступления', { index: 0 }),
    датаУстановки: attr('Дата установки', { index: 1 }),
    серийныйНомер: attr('Серийный номер', { index: 2 }),
    причинаВозврата: attr('Причина возврата', { index: 3 }),
    модель: belongsTo('i-i-s-kursovaya-модель', 'Модель', {
      название: attr('Название', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'название' }),
    тип: belongsTo('i-i-s-kursovaya-тип', 'Тип', {
      название: attr('Название', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'название' }),
    клиент: belongsTo('i-i-s-kursovaya-клиент', 'Клиент', {
      фИО: attr('ФИО', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'фИО' })
  });
};
