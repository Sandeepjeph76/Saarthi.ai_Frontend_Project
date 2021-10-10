/*eslint strict:0, no-console:0 */
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// handle errors
process.on('uncaughtException', function (err) {
  console.error(err.toString());
});

_commander2.default.version(_package2.default.name + ' version ' + _package2.default.version, '-v, --version').parse(process.argv);

console.log('\naudio-editor coming soon!\n\nplease stay up-to-date by watching:\nhttp://github.com/skratchdot/audio-editor\n');
//# sourceMappingURL=index.js.map
