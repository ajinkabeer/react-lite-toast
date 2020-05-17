import React, { useState, useEffect } from 'react';

var done = require("./check~YoXmxPYW.svg");

var error = require("./error~sZYKhomM.svg");

var info = require("./info~hXvLIqUM.svg");

var warning = require("./warning~vKUgrCLp.svg");

var close = require("./close~MmoXfehv.svg");

var Style = {"toastcontainer":"_styles-module__toastcontainer__15L_e","toast":"_styles-module__toast__3KnTL","toasttitle":"_styles-module__toasttitle__2xY3H","toastmessage":"_styles-module__toastmessage__2aPZH","toastimage":"_styles-module__toastimage__MQjN0","snack":"_styles-module__snack__298KZ","closebutton":"_styles-module__closebutton__1bDA9","topright":"_styles-module__topright__18X5b","animatefromright":"_styles-module__animatefromright__2Fqj2","bottomright":"_styles-module__bottomright__S5YOC","topleft":"_styles-module__topleft__3xLQ5","animatefromleft":"_styles-module__animatefromleft__2Gun4","bottomleft":"_styles-module__bottomleft__rqvi6","bottomup":"_styles-module__bottomup__2V_fh","animatefrombottom":"_styles-module__animatefrombottom__qwi-u","topdown":"_styles-module__topdown__1O4DU","animatefromtop":"_styles-module__animatefromtop__Smj_t"};

const Toast = ({
  type,
  title,
  description,
  position
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
    }, 2000);
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
    className: `${Style.toastcontainer}  ${Style[position]}`
  }, toast.map((toast, i) => React.createElement("div", {
    key: i,
    className: `${Style.toast} ${Style.snack}  ${Style[position]}`,
    style: {
      backgroundColor: toast.backgroundColor
    }
  }, React.createElement("img", {
    className: `${Style.closebutton}`,
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
    className: `${Style.toastmessage}`
  }, toast.description)))));
};

export { Toast };
//# sourceMappingURL=index.modern.js.map
