import React, { useState, useEffect } from 'react';

var done = require("./check~YAqNKjRx.svg");

var error = require("./error~oAuuRnLQ.svg");

var info = require("./info~YHVUvgRi.svg");

var warning = require("./warning~kxHVRSgn.svg");

var close = require("./close~CpoGlLRi.svg");

var Style = {"toastcontainer":"_styles-module__toastcontainer__15L_e","toast":"_styles-module__toast__3KnTL","toasttitle":"_styles-module__toasttitle__2xY3H","toastdescription":"_styles-module__toastdescription__26QLJ","toastimage":"_styles-module__toastimage__MQjN0","toastsupersnack":"_styles-module__toastsupersnack__3gWOV","toastclosebutton":"_styles-module__toastclosebutton__3RsX7","topright":"_styles-module__topright__18X5b","animatefromright":"_styles-module__animatefromright__2Fqj2","bottomright":"_styles-module__bottomright__S5YOC","topleft":"_styles-module__topleft__3xLQ5","animatefromleft":"_styles-module__animatefromleft__2Gun4","bottomleft":"_styles-module__bottomleft__rqvi6","bottomup":"_styles-module__bottomup__2V_fh","animatefrombottom":"_styles-module__animatefrombottom__qwi-u","topdown":"_styles-module__topdown__1O4DU","animatefromtop":"_styles-module__animatefromtop__Smj_t"};

const Toast = ({
  type,
  title,
  description,
  position,
  duration,
  closeButton: _closeButton = false
}) => {
  const [toast, setToast] = useState([]);
  useEffect(() => {
    setToastType(type);
  }, [type]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (toast.length) {
        closeToast(toast[0].title);
      }
    }, duration);
    return () => {
      clearInterval(interval);
    };
  }, [toast]);

  const setToastType = type => {
    switch (type) {
      case 'success':
        setToast([...toast, {
          title,
          description,
          backgroundColor: '#2ea05d',
          icon: done
        }]);
        break;

      case 'error':
        setToast([...toast, {
          title,
          description,
          backgroundColor: '#E53E3E',
          icon: error
        }]);
        break;

      case 'info':
        setToast([...toast, {
          title,
          description,
          backgroundColor: '#3182ce',
          icon: info
        }]);
        break;

      case 'warning':
        setToast([{ ...toast,
          title,
          description,
          backgroundColor: '#DD6B20',
          icon: warning
        }]);
        break;
    }
  };

  const closeToast = title => {
    const index = toast.findIndex(e => e.title === title);
    toast.splice(index, 1);
    setToast([...toast]);
  };

  return React.createElement("div", {
    className: `${Style.toastcontainer}  ${Style[position]}`,
    style: {
      animationDuration: `${duration + 500 + 'ms'}`
    }
  }, toast.map((toast, i) => React.createElement("div", {
    key: i,
    className: `${Style.toast} ${Style.toastsupersnack}  ${Style[position]}`,
    style: {
      backgroundColor: toast.backgroundColor,
      animationDuration: `${duration + 500 + 'ms'}`
    }
  }, _closeButton && React.createElement("img", {
    className: `${Style.toastclosebutton}`,
    src: close,
    alt: "close-button",
    onClick: () => closeToast(toast.title)
  }), React.createElement("div", {
    className: `${Style.toastimage}`
  }, React.createElement("img", {
    src: toast.icon,
    alt: ""
  })), React.createElement("div", null, React.createElement("p", {
    className: `${Style.toasttitle}`
  }, toast.title), React.createElement("p", {
    className: `${Style.toastdescription}`
  }, toast.description)))));
};

export { Toast };
//# sourceMappingURL=index.modern.js.map
