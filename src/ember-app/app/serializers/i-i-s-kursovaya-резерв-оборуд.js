import { Serializer as РезервОборудSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-резерв-оборуд';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РезервОборудSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
