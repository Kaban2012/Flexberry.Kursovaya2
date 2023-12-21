import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РезервОборудMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-резерв-оборуд';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РезервОборудMixin, Validations, {
});

defineProjections(Model);

export default Model;
