import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-клиент', 'Unit | Serializer | i-i-s-kursovaya-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
