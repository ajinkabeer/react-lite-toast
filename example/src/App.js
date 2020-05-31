import React, { useState } from 'react'
import { Toast } from 'react-lite-toast'
import 'react-lite-toast/dist/index.css'

const App = () => {
  const [toast, setToast] = useState(false)
  const renderToast = () => {
    setTimeout(() => {
      setToast(prevState => !prevState)
    }, 2000)
    setToast(prevState => !prevState)
  }
  return (
    <div>
      <button onClick={() => renderToast()} className="btn">Fire toast</button>
      {toast && <Toast type="warning" title="Warning" description="Michael Scott" position="bottomup" duration={1500} closeButton={true} />}
    </div>
  )
}

export default App
