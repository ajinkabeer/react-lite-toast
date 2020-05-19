import React, { useState, useEffect } from 'react';

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

var Style = {"toastcontainer":"_15L_e","toast":"_3KnTL","toasttitle":"_2xY3H","toastmessage":"_2aPZH","toastimage":"_MQjN0","snack":"_298KZ","closebutton":"_1bDA9","topright":"_18X5b","animatefromright":"_2Fqj2","bottomright":"_S5YOC","topleft":"_3xLQ5","animatefromleft":"_2Gun4","bottomleft":"_rqvi6","bottomup":"_2V_fh","animatefrombottom":"_qwi-u","topdown":"_1O4DU","animatefromtop":"_Smj_t"};

var Toast = function Toast(_ref) {
  var type = _ref.type,
      title = _ref.title,
      description = _ref.description,
      position = _ref.position,
      duration = _ref.duration;

  var _useState = useState([]),
      toast = _useState[0],
      setToast = _useState[1];

  useEffect(function () {
    setToastType(type);
  }, [type]);
  useEffect(function () {
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

  return React.createElement("div", {
    className: Style.toastcontainer + "  " + Style[position],
    style: {
      animationDuration: "" + (duration + 500 + 'ms')
    }
  }, toast.map(function (toast, i) {
    return React.createElement("div", {
      key: i,
      className: Style.toast + " " + Style.snack + "  " + Style[position],
      style: {
        backgroundColor: toast.backgroundColor,
        animationDuration: "" + (duration + 500 + 'ms')
      }
    }, React.createElement("img", {
      className: "" + Style.closebutton,
      src: close,
      alt: "close-button",
      onClick: function onClick() {
        return closeToast(toast.title);
      }
    }), React.createElement("div", {
      className: "" + Style.toastimage
    }, React.createElement("img", {
      src: toast.icon,
      alt: ""
    })), React.createElement("div", null, React.createElement("p", {
      className: "" + Style.toasttitle
    }, toast.title), React.createElement("p", {
      className: "" + Style.toastmessage
    }, toast.description)));
  }));
};

export { Toast };
//# sourceMappingURL=index.modern.js.map
