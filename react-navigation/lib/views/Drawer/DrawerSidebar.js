'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _withCachedChildNavigation = require('../../withCachedChildNavigation');

var _withCachedChildNavigation2 = _interopRequireDefault(_withCachedChildNavigation);

var _NavigationActions = require('../../NavigationActions');

var _NavigationActions2 = _interopRequireDefault(_NavigationActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component that renders the sidebar screen of the drawer.
 */
var DrawerSidebar = function (_PureComponent) {
  _inherits(DrawerSidebar, _PureComponent);

  function DrawerSidebar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DrawerSidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DrawerSidebar.__proto__ || Object.getPrototypeOf(DrawerSidebar)).call.apply(_ref, [this].concat(args))), _this), _this._getScreenOptions = function (routeKey) {
      var DrawerScreen = _this.props.router.getComponentForRouteName('DrawerClose');
      var childNavigation = _this.props.childNavigationProps[routeKey];

      return DrawerScreen.router.getScreenOptions(childNavigation.state.index !== undefined // if the child screen is a StackRouter then always show the screen options of its first screen (see #1914)
      ? _extends({}, childNavigation, {
        state: _extends({}, childNavigation.state, { index: 0 })
      }) : childNavigation, _this.props.screenProps);
    }, _this._getLabel = function (_ref2) {
      var focused = _ref2.focused,
          tintColor = _ref2.tintColor,
          route = _ref2.route;

      var _this$_getScreenOptio = _this._getScreenOptions(route.key),
          drawerLabel = _this$_getScreenOptio.drawerLabel,
          title = _this$_getScreenOptio.title;

      if (drawerLabel) {
        return typeof drawerLabel === 'function' ? drawerLabel({ tintColor: tintColor, focused: focused }) : drawerLabel;
      }

      if (typeof title === 'string') {
        return title;
      }

      return route.routeName;
    }, _this._renderIcon = function (_ref3) {
      var focused = _ref3.focused,
          tintColor = _ref3.tintColor,
          route = _ref3.route;

      var _this$_getScreenOptio2 = _this._getScreenOptions(route.key),
          drawerIcon = _this$_getScreenOptio2.drawerIcon;

      if (drawerIcon) {
        return typeof drawerIcon === 'function' ? drawerIcon({ tintColor: tintColor, focused: focused }) : drawerIcon;
      }
      return null;
    }, _this._onItemPress = function (_ref4) {
      var route = _ref4.route,
          focused = _ref4.focused;

      _this.props.navigation.navigate('DrawerClose');
      if (!focused) {
        var subAction = void 0;
        // if the child screen is a StackRouter then always navigate to its first screen (see #1914)
        if (route.index !== undefined && route.index !== 0) {
          route = route;
          subAction = _NavigationActions2.default.navigate({
            routeName: route.routes[0].routeName
          });
        }
        _this.props.navigation.navigate(route.routeName, undefined, subAction);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DrawerSidebar, [{
    key: 'render',
    value: function render() {
      var ContentComponent = this.props.contentComponent;
      var state = this.props.navigation.state;

      return _react2.default.createElement(
        _reactNative.View,
        { style: [styles.container, this.props.style] },
        _react2.default.createElement(ContentComponent, _extends({}, this.props.contentOptions, {
          navigation: this.props.navigation,
          items: state.routes,
          activeItemKey: state.routes[state.index] && state.routes[state.index].key,
          screenProps: this.props.screenProps,
          getLabel: this._getLabel,
          renderIcon: this._renderIcon,
          onItemPress: this._onItemPress,
          router: this.props.router
        }))
      );
    }
  }]);

  return DrawerSidebar;
}(_react.PureComponent);

exports.default = (0, _withCachedChildNavigation2.default)(DrawerSidebar);


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});