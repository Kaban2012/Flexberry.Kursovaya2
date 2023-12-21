import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МодельMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-модель';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МодельMixin, Validations, {
});

defineProjections(Model);

export default Model;
