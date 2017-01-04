if (!window.Intl) {
  window.Intl = require('intl');
  require('intl/locale-data/jsonp/en-US.js');
  require('intl/locale-data/jsonp/es.js');
}
const IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
const IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

const rf = new IntlRelativeFormat('es');

const es = require('./es');
const en = require('./en-US');

const MESSAGE = {};
MESSAGE.es = es;
MESSAGE['en-US'] = en;

const locale = localStorage.locale || 'es';

module.exports = {
  message: function (text, opts) {
    opts = opts || {};
    let msg = new IntlMessageFormat(MESSAGE[locale][text], locale, null)
    return msg.format(opts);
  },
  date: new IntlRelativeFormat(locale)
}
