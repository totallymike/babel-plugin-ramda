var _add = _interopRequireDefault(require("ramda/src/add")).default;

var _map = _interopRequireDefault(require("ramda/src/map")).default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapper = _map(_add(1));

mapper([1, 2, 3]);