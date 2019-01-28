const Field = require('./Field');

class TextField extends Field {
  constructor(canBeNull = false, defaultValue = null) {
    super();
    this.dataType = 'text';
    this.canBeNull = canBeNull;
    this.defaultValue = defaultValue;
  }
}

module.exports = TextField;
