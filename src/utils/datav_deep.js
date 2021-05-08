// var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
// import "@babel/runtime/helpers/interopRequireDefault";
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

export function deepMerge(target, merged) {
    for (var key in merged) {
      if (target[key] && (0, _typeof2["default"])(target[key]) === 'object') {
        deepMerge(target[key], merged[key]);
        continue;
      }
  
      if ((0, _typeof2["default"])(merged[key]) === 'object') {
        target[key] = (0, deepClone)(merged[key], true);
        continue;
      }
  
      target[key] = merged[key];
    }
  
    return target;
}
  
export function deepClone(object) {
    var recursion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!object) return object;
    var parse = JSON.parse,
        stringify = JSON.stringify;
    if (!recursion) return parse(stringify(object));
    var clonedObj = object instanceof Array ? [] : {};
  
    if (object && (0, _typeof2["default"])(object) === 'object') {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          if (object[key] && (0, _typeof2["default"])(object[key]) === 'object') {
            clonedObj[key] = deepClone(object[key], true);
          } else {
            clonedObj[key] = object[key];
          }
        }
      }
    }
  
    return clonedObj;
}
  
