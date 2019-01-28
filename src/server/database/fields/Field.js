class Field {
  constructor() {
    if (new.target === Field) {
      throw new TypeError('Cannot construct Field instances directly');
    }
  }
}

module.exports = Field;
