function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

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

var done = require("./check~YAqNKjRx.svg");

var error = require("./error~oAuuRnLQ.svg");

var info = require("./info~YHVUvgRi.svg");

var warning = require("./warning~LrCINTNk.svg");

var close = require("./close~CpoGlLRi.svg");

var Style = {"toastcontainer":"_styles-module__toastcontainer__15L_e","toast":"_styles-module__toast__3KnTL","toasttitle":"_styles-module__toasttitle__2xY3H","toastdescription":"_styles-module__toastdescription__26QLJ","toastimage":"_styles-module__toastimage__MQjN0","toastsupersnack":"_styles-module__toastsupersnack__3gWOV","toastclosebutton":"_styles-module__toastclosebutton__3RsX7","topright":"_styles-module__topright__18X5b","animatefromright":"_styles-module__animatefromright__2Fqj2","bottomright":"_styles-module__bottomright__S5YOC","topleft":"_styles-module__topleft__3xLQ5","animatefromleft":"_styles-module__animatefromleft__2Gun4","bottomleft":"_styles-module__bottomleft__rqvi6","bottomup":"_styles-module__bottomup__2V_fh","animatefrombottom":"_styles-module__animatefrombottom__qwi-u","topdown":"_styles-module__topdown__1O4DU","animatefromtop":"_styles-module__animatefromtop__Smj_t"};

var Toast = function Toast(_ref) {
  var type = _ref.type,
      title = _ref.title,
      description = _ref.description,
      position = _ref.position,
      duration = _ref.duration,
      _ref$closeButton = _ref.closeButton,
      closeButton = _ref$closeButton === void 0 ? false : _ref$closeButton;

  var _useState = React.useState([]),
      toast = _useState[0],
      setToast = _useState[1];

  React.useEffect(function () {
    setToastType(type);
  }, [type]);
  React.useEffect(function () {
    var interval = setInterval(function () {
      if (toast.length) {
        closeToast(toast[0].title);
      }
    }, duration);
    return function () {
      clearInterval(interval);
    };
  }, [toast]);

  var setToastType = function setToastType(type) {
    switch (type) {
      case 'success':
        setToast([].concat(toast, [{
          title: title,
          description: description,
          backgroundColor: '#2ea05d',
          icon: done
        }]));
        break;

      case 'error':
        setToast([].concat(toast, [{
          title: title,
          description: description,
          backgroundColor: '#E53E3E',
          icon: error
        }]));
        break;

      case 'info':
        setToast([].concat(toast, [{
          title: title,
          description: description,
          backgroundColor: '#3182ce',
          icon: info
        }]));
        break;

      case 'warning':
        setToast([_extends(_extends({}, toast), {}, {
          title: title,
          description: description,
          backgroundColor: '#DD6B20',
          icon: warning
        })]);
        break;
    }
  };

  var closeToast = function closeToast(title) {
    var index = toast.findIndex(function (e) {
      return e.title === title;
    });
    toast.splice(index, 1);
    setToast([].concat(toast));
  };

  return React__default.createElement("div", {
    className: Style.toastcontainer + "  " + Style[position],
    style: {
      animationDuration: "" + (duration + 500 + 'ms')
    }
  }, toast.map(function (toast, i) {
    return React__default.createElement("div", {
      key: i,
      className: Style.toast + " " + Style.toastsupersnack + "  " + Style[position],
      style: {
        backgroundColor: toast.backgroundColor,
        animationDuration: "" + (duration + 500 + 'ms')
      }
    }, closeButton && React__default.createElement("img", {
      className: "" + Style.toastclosebutton,
      src: close,
      alt: "close-button",
      onClick: function onClick() {
        return closeToast(toast.title);
      }
    }), React__default.createElement("div", {
      className: "" + Style.toastimage
    }, React__default.createElement("img", {
      src: toast.icon,
      alt: ""
    })), React__default.createElement("div", null, React__default.createElement("p", {
      className: "" + Style.toasttitle
    }, toast.title), React__default.createElement("p", {
      className: "" + Style.toastdescription
    }, toast.description)));
  }));
};

exports.Toast = Toast;
//# sourceMappingURL=index.js.map
