const Field = require('./Field');

class DateTimeField extends Field {
  constructor(canBeNull = false, defaultValue = null) {
    super();
    this.dataType = 'datetime';
    this.canBeNull = canBeNull;
    this.defaultValue = defaultValue;
  }
}

module.exports = DateTimeField;
