import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-kursovaya-филиал-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-kursovaya-возврат-клиентом+модель':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'название',
            required: true,
            relationName: 'модель',
            projection: 'МодельL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-возврат-клиентом+тип':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'название',
            required: true,
            relationName: 'тип',
            projection: 'ТипL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-возврат-клиентом+клиент':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'клиент',
            projection: 'КлиентL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-резерв-оборуд+тип':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'название',
            required: true,
            relationName: 'тип',
            projection: 'ТипL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-резерв-оборуд+модель':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'название',
            required: true,
            relationName: 'модель',
            projection: 'МодельL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-резерв-оборуд+администратор':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'администратор',
            projection: 'ПользовательL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
