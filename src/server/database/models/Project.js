const DateTimeField = require('../fields/DateTimeField');
const TextField = require('../fields/TextField');

class Project {
  static get fields() {
    return {
      name: new TextField(),
      description: new TextField(),
      createdDate: new DateTimeField(
        false,
        "(strftime('%Y-%m-%d %H:%M:%S:%s','now', 'localtime'))"
      ),
      modifiedDate: new DateTimeField(
        false,
        "(strftime('%Y-%m-%d %H:%M:%S:%s','now', 'localtime'))"
      )
    };
  }
}

module.exports = Project;
