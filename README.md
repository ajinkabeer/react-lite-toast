# react-lite-toast

> A minimal toast notification for react

[![NPM](https://img.shields.io/npm/v/react-lite-toast.svg)](https://www.npmjs.com/package/react-lite-toast) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-lite-toast
```

## Usage

```tsx
import React, { useState } from 'react'
import { Toast } from 'react-lite-toast'
import 'react-lite-toast/dist/index.css'

const App = () => {
  const [toast, setToast] = useState(false)
  return (
    <div>
      <button onClick={() => setToast(!toast)}>Click me</button>
      {toast && <Toast type="success" title="Completed" description="Flippity flip" position="bottomup" />}
    </div>
  )
}

export default App
```

## License

MIT © [ajinkabeer](https://github.com/ajinkabeer)
