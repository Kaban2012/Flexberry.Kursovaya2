import {
  defineNamespace,
  defineProjections,
  Model as МодельMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-модель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МодельMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
