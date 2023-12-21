import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФилиалMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-филиал';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФилиалMixin, Validations, {
});

defineProjections(Model);

export default Model;
