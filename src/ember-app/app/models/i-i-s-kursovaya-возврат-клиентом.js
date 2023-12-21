import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВозвратКлиентомMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-возврат-клиентом';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВозвратКлиентомMixin, Validations, {
});

defineProjections(Model);

export default Model;
