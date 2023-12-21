import { Serializer as ВозвратКлиентомSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-возврат-клиентом';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВозвратКлиентомSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
