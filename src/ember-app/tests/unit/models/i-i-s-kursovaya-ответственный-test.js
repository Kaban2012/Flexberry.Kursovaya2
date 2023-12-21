import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-ответственный', 'Unit | Model | i-i-s-kursovaya-ответственный', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-возврат-клиентом',
    'model:i-i-s-kursovaya-клиент',
    'model:i-i-s-kursovaya-модель',
    'model:i-i-s-kursovaya-ответственный',
    'model:i-i-s-kursovaya-пользователь',
    'model:i-i-s-kursovaya-резерв-оборуд',
    'model:i-i-s-kursovaya-тип',
    'model:i-i-s-kursovaya-филиал',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
