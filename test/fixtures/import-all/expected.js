var _add = _interopRequireDefault(require('ramda/src/add')).default;

var _map = _interopRequireDefault(require('ramda/src/map')).default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var result = _map(_add(1), [1, 2, 3]);