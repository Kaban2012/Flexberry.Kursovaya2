import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПередачи: DS.attr('date'),
  датаПоступления: DS.attr('date'),
  переданоКлиенту: DS.attr('boolean'),
  серийныйНомер: DS.attr('string'),
  администратор: DS.belongsTo('i-i-s-kursovaya-пользователь', { inverse: null, async: false }),
  модель: DS.belongsTo('i-i-s-kursovaya-модель', { inverse: null, async: false }),
  тип: DS.belongsTo('i-i-s-kursovaya-тип', { inverse: null, async: false }),
  филиал: DS.belongsTo('i-i-s-kursovaya-филиал', { inverse: 'резервОборуд', async: false })
});

export let ValidationRules = {
  датаПередачи: {
    descriptionKey: 'models.i-i-s-kursovaya-резерв-оборуд.validations.датаПередачи.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаПоступления: {
    descriptionKey: 'models.i-i-s-kursovaya-резерв-оборуд.validations.датаПоступления.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  переданоКлиенту: {
    descriptionKey: 'models.i-i-s-kursovaya-резерв-оборуд.validations.переданоКлиенту.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серийныйНомер: {
    descriptionKey: 'models.i-i-s-kursovaya-резерв-оборуд.validations.серийныйНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  администратор: {
    descriptionKey: 'models.i-i-s-kursovaya-резерв-оборуд.validations.администратор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  модель: {
    descriptionKey: 'models.i-i-s-kursovaya-резерв-оборуд.validations.модель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-kursovaya-резерв-оборуд.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  филиал: {
    descriptionKey: 'models.i-i-s-kursovaya-резерв-оборуд.validations.филиал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РезервОборудE', 'i-i-s-kursovaya-резерв-оборуд', {
    датаПоступления: attr('Дата поступления', { index: 0 }),
    переданоКлиенту: attr('Передано клиенту', { index: 1 }),
    датаПередачи: attr('Дата передачи', { index: 2 }),
    серийныйНомер: attr('Серийный номер', { index: 3 }),
    тип: belongsTo('i-i-s-kursovaya-тип', 'Тип', {
      название: attr('Название', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'название' }),
    модель: belongsTo('i-i-s-kursovaya-модель', 'Модель', {
      название: attr('Название', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'название' }),
    администратор: belongsTo('i-i-s-kursovaya-пользователь', 'Администратор', {
      фИО: attr('ФИО', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'фИО' })
  });
};
