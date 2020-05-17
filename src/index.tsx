import React, { useEffect, useState } from 'react'
import done from './check.svg'
import error from './error.svg'
import info from './info.svg'
import warning from './warning.svg'
import close from './close.svg'
import Style from './styles.module.css'

type Props = {
  type: string,
  title: string,
  description: string,
  position: string,
}

interface ToastProps {
  title: string,
  description: string,
  backgroundColor: string,
  icon: string
}


export const Toast = ({ type, title, description, position }: Props) => {
  const [toast, setToast] = useState<ToastProps[]>([])

  useEffect(() => {
    setToastType(type)
    // eslint-disable-next-line
  }, [type]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toast.length) {
        closeToast(toast[0].title);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    }
    // eslint-disable-next-line
  }, [toast]);


  const setToastType = (type: string) => {
    switch (type) {
      case 'success':
        setToast([...toast, { title, description, backgroundColor: '#2ea05d', icon: done }])
        break;
      case 'error':
        setToast([...toast, { title, description, backgroundColor: '#E53E3E', icon: error }])
        break;
      case 'info':
        setToast([...toast, { title, description, backgroundColor: '#3182ce', icon: info }])
        break;
      case 'warning':
        setToast([{ ...toast, title, description, backgroundColor: '#DD6B20', icon: warning }])
        break;
      default:
        break;
    }
  }


  const closeToast = (title: string) => {
    const index = toast.findIndex(e => e.title === title);
    toast.splice(index, 1);
    setToast([...toast]);
  }

  return (

    <div className={`${Style.toastcontainer}  ${Style[position]}`}>
      {
        toast.map((toast, i) =>
          <div
            key={i}
            className={`${Style.toast} ${Style.snack}  ${Style[position]}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <img className={`${Style.closebutton}`} src={close} alt="close-button" onClick={() => closeToast(toast.title)} />
            <div className={`${Style.toastimage}`}>
              <img src={toast.icon} alt="" />
            </div>
            <div>
              <p className={`${Style.toasttitle}`}>{toast.title}</p>
              <p className={`${Style.toastmessage}`}>
                {toast.description}
              </p>
            </div>
          </div>
        )
      }
    </div>

  );
}


