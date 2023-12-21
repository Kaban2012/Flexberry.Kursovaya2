import { Serializer as МодельSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-модель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МодельSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
