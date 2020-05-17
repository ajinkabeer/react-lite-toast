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

var done = require("./check~YoXmxPYW.svg");

var error = require("./error~sZYKhomM.svg");

var info = require("./info~hXvLIqUM.svg");

var warning = require("./warning~vKUgrCLp.svg");

var close = require("./close~MmoXfehv.svg");

var Style = {"toastcontainer":"_styles-module__toastcontainer__15L_e","toast":"_styles-module__toast__3KnTL","toasttitle":"_styles-module__toasttitle__2xY3H","toastmessage":"_styles-module__toastmessage__2aPZH","toastimage":"_styles-module__toastimage__MQjN0","snack":"_styles-module__snack__298KZ","closebutton":"_styles-module__closebutton__1bDA9","topright":"_styles-module__topright__18X5b","animatefromright":"_styles-module__animatefromright__2Fqj2","bottomright":"_styles-module__bottomright__S5YOC","topleft":"_styles-module__topleft__3xLQ5","animatefromleft":"_styles-module__animatefromleft__2Gun4","bottomleft":"_styles-module__bottomleft__rqvi6","bottomup":"_styles-module__bottomup__2V_fh","animatefrombottom":"_styles-module__animatefrombottom__qwi-u","topdown":"_styles-module__topdown__1O4DU","animatefromtop":"_styles-module__animatefromtop__Smj_t"};

var Toast = function Toast(_ref) {
  var type = _ref.type,
      title = _ref.title,
      description = _ref.description,
      position = _ref.position;

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
    }, 2000);
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
    className: Style.toastcontainer + "  " + Style[position]
  }, toast.map(function (toast, i) {
    return React__default.createElement("div", {
      key: i,
      className: Style.toast + " " + Style.snack + "  " + Style[position],
      style: {
        backgroundColor: toast.backgroundColor
      }
    }, React__default.createElement("img", {
      className: "" + Style.closebutton,
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
      className: "" + Style.toastmessage
    }, toast.description)));
  }));
};

exports.Toast = Toast;
//# sourceMappingURL=index.js.map
