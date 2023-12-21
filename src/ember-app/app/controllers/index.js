import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.учет-резервного-оборудования.caption'),
          title: i18n.t('forms.application.sitemap.учет-резервного-оборудования.title'),
          children: [{
            link: 'i-i-s-kursovaya-филиал-l',
            caption: i18n.t('forms.application.sitemap.учет-резервного-оборудования.i-i-s-kursovaya-филиал-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-резервного-оборудования.i-i-s-kursovaya-филиал-l.title'),
            icon: 'folder open',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-kursovaya-пользователь-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-kursovaya-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-kursovaya-пользователь-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kursovaya-ответственный-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-kursovaya-ответственный-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-kursovaya-ответственный-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-kursovaya-модель-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-kursovaya-модель-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-kursovaya-модель-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kursovaya-тип-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-kursovaya-тип-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-kursovaya-тип-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-kursovaya-клиент-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-kursovaya-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-kursovaya-клиент-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya-ответственный-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-kursovaya-ответственный-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-kursovaya-ответственный-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})