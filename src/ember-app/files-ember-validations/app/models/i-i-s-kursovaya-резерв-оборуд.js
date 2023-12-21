import {
  defineNamespace,
  defineProjections,
  Model as РезервОборудMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-резерв-оборуд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РезервОборудMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
