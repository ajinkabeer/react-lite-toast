<div align="center">

# React-lite-toast [![NPM](https://img.shields.io/npm/v/react-lite-toast.svg)](https://www.npmjs.com/package/react-lite-toast) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

</div>

A minimal toast notification for react with an unpacked size of 33.1 kB 🚀.


## Install

```bash
npm install --save react-lite-toast
```
or
```bash
yarn add react-lite-toast
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

## Props

| Prop                               | Description                                                        |
| ---------------------------------- | ------------------------------------------------------------------ |
| type `string`                      | Required. One of `success`, `error`, `warning`, `info`             |
| title `string`                     | Required. The title of the toast notifaction.                      |
| description `string `              | Required: The content of the toast notification                    |
| position: `string    `             | Required. One of `bottomup`, `topdown`, `topleft`, `topright`,`bottomleft`, `bottomright`          |
 

## Contributors

- [Ajin Kabeer](https://github.com/ajinkabeer)



## License

MIT © [ajinkabeer](https://github.com/ajinkabeer)
