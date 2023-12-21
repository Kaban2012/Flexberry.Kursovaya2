import {
  defineNamespace,
  defineProjections,
  Model as ВозвратКлиентомMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-возврат-клиентом';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВозвратКлиентомMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
