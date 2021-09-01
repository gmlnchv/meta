import { forwardRef, useStyleConfig, omitThemingProps, chakra } from '@chakra-ui/system';
import { Popover, PopoverTrigger, PopoverContent, PopoverBody, Text, extendTheme, ChakraProvider } from '@chakra-ui/react';
import { cx } from '@chakra-ui/utils';
import { createElement } from 'react';

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

var Token = /*#__PURE__*/forwardRef(function (props, ref) {
  var styles = useStyleConfig("Token", props);

  var _omitThemingProps = omitThemingProps(props),
      value = _omitThemingProps.value,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, _excluded);

  return createElement(Popover, {
    placement: "top",
    variant: "responsive",
    trigger: "hover",
    flip: false
  }, createElement(PopoverTrigger, null, createElement(chakra.span, Object.assign({
    ref: ref,
    className: cx("dp-token", props.className)
  }, rest, {
    __css: _extends({
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle"
    }, styles)
  }))), createElement(PopoverContent, {
    w: "auto"
  }, createElement(PopoverBody, {
    py: 1,
    textAlign: "center"
  }, createElement(Text, {
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

var theme = /*#__PURE__*/extendTheme({
  components: {
    Token: Token$1
  }
});

var ThemeProvider = function ThemeProvider(props) {
  return createElement(ChakraProvider, Object.assign({
    resetCSS: false
  }, props, {
    theme: theme
  }));
};

export { ThemeProvider, Token };
//# sourceMappingURL=components.esm.js.map
