import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  название: DS.attr('string'),
  номерТелефона: DS.attr('number'),
  рабочаяПочта: DS.attr('string'),
  директор: DS.belongsTo('i-i-s-kursovaya-ответственный', { inverse: null, async: false }),
  возвратКлиентом: DS.hasMany('i-i-s-kursovaya-возврат-клиентом', { inverse: 'филиал', async: false }),
  резервОборуд: DS.hasMany('i-i-s-kursovaya-резерв-оборуд', { inverse: 'филиал', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-kursovaya-филиал.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-kursovaya-филиал.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-kursovaya-филиал.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  рабочаяПочта: {
    descriptionKey: 'models.i-i-s-kursovaya-филиал.validations.рабочаяПочта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  директор: {
    descriptionKey: 'models.i-i-s-kursovaya-филиал.validations.директор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  возвратКлиентом: {
    descriptionKey: 'models.i-i-s-kursovaya-филиал.validations.возвратКлиентом.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  резервОборуд: {
    descriptionKey: 'models.i-i-s-kursovaya-филиал.validations.резервОборуд.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФилиалE', 'i-i-s-kursovaya-филиал', {
    название: attr('Название', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    рабочаяПочта: attr('Рабочая почта', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 }),
    директор: belongsTo('i-i-s-kursovaya-ответственный', 'Директор', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' }),
    возвратКлиентом: hasMany('i-i-s-kursovaya-возврат-клиентом', 'Возврат клиентом', {
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
    }),
    резервОборуд: hasMany('i-i-s-kursovaya-резерв-оборуд', 'Резерв оборуд', {
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
    })
  });

  modelClass.defineProjection('ФилиалL', 'i-i-s-kursovaya-филиал', {
    название: attr('Название', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    рабочаяПочта: attr('Рабочая почта', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 }),
    директор: belongsTo('i-i-s-kursovaya-ответственный', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
