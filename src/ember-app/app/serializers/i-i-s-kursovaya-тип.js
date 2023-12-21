import { Serializer as ТипSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-тип';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТипSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
