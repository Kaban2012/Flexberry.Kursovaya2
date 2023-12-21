import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      администратор: { serialize: 'odata-id', deserialize: 'records' },
      модель: { serialize: 'odata-id', deserialize: 'records' },
      тип: { serialize: 'odata-id', deserialize: 'records' },
      филиал: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
