'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var system = require('@chakra-ui/system');
var react = require('@chakra-ui/react');
var utils = require('@chakra-ui/utils');
var React = require('react');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["className", "value"];
/**
 * Component used to display design tokens or variables.
 */

var Token = /*#__PURE__*/system.forwardRef(function (props, ref) {
  var styles = system.useStyleConfig("Token", props);

  var _omitThemingProps = system.omitThemingProps(props),
      value = _omitThemingProps.value,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, _excluded);

  return React.createElement(react.Popover, {
    placement: "top",
    variant: "responsive",
    trigger: "hover",
    flip: false
  }, React.createElement(react.PopoverTrigger, null, React.createElement(system.chakra.span, Object.assign({
    ref: ref,
    className: utils.cx("dp-token", props.className)
  }, rest, {
    __css: _extends({
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle"
    }, styles)
  }))), React.createElement(react.PopoverContent, {
    w: "auto"
  }, React.createElement(react.PopoverBody, {
    py: 1,
    textAlign: "center"
  }, React.createElement(react.Text, {
    fontSize: "xs",
    my: 0,
    color: "gray.600"
  }, value))));
});

var Token$1 = {
  baseStyle: {
    px: 3,
    py: 1,
    cursor: "pointer",
    fontSize: "xs",
    fontWeight: "medium",
    border: "1px",
    color: "gray.600",
    borderColor: "gray.200",
    borderRadius: "full"
  }
};

var theme = /*#__PURE__*/react.extendTheme({
  components: {
    Token: Token$1
  }
});

var ThemeProvider = function ThemeProvider(props) {
  return React.createElement(react.ChakraProvider, Object.assign({
    resetCSS: false
  }, props, {
    theme: theme
  }));
};

exports.ThemeProvider = ThemeProvider;
exports.Token = Token;
//# sourceMappingURL=components.cjs.development.js.map
