<div align="center">

# react-lite-toast ⚡
[![NPM](https://img.shields.io/npm/v/react-lite-toast.svg)](https://www.npmjs.com/package/react-lite-toast) ![NPM](https://img.shields.io/npm/dm/react-lite-toast.svg?label=%E2%8F%ACdownloads) ![NPM](https://img.shields.io/npm/l/react-lite-toast) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![NPM](https://img.shields.io/github/last-commit/ajinkabeer/react-lite-toast) ![NPM](https://img.shields.io/github/stars/ajinkabeer/react-lite-toast?style=social)

</div>

A minimal and lite toast notification for react ⚡.

[Live Demo](https://ajin.dev/react-lite-toast-home/)
 
## UI
<div align="center">

![Alt text](assets/success.PNG "success") ![Alt text](assets/error.PNG "error")
![Alt text](assets/warning.PNG "error")  ![Alt text](assets/info.PNG "error")

</div>


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
      {toast && <Toast type="success" title="Completed" description="Flippity flip" position="bottomup" duration={1500} />}
    </div>
  )
}

export default App
```
or

```tsx
import React, { Component } from "react";
import { Toast } from "react-lite-toast";
import "react-lite-toast/dist/index.css";

class App extends Component {
  state = {
    toast: false
  };

  setToast = () => {
    this.setState(prevState => ({
      toast: !prevState.toast
    }));
  };

  render() {
    return (
      <>
        <button onClick={() => this.setToast()}>Click me</button>
        {this.state.toast && (
          <Toast
            type="success"
            title="Completed"
            description="Flippity flip"
            position="bottomup"
            duration={1500}
          />
        )}
      </>
    );
  }
}

export default App;
```

## Props

| Prop                               | Description                                                        |
| ---------------------------------- | ------------------------------------------------------------------ |
| type `string`                      | Required. One of `success`, `error`, `warning`, `info`             |
| title `string`                     | Required. The title of the toast notifaction.                      |
| description `string`               | Required: The content of the toast notification                    |
| position: `string`                 | Required. One of `bottomup`, `topdown`, `topleft`, `topright`,`bottomleft`, `bottomright`          |
| duration `number`                  | Required: The total time duration of toast. i.e, 1500              |
| closeButton `boolean`              | Optional: default to false.                                        |



## Contributors

- [Ajin Kabeer](https://github.com/ajinkabeer)

## Release

You can view the latest release note [here](https://github.com/ajinkabeer/react-lite-toast/releases)

## Inspiration

- [Chakra-UI Toast](https://chakra-ui.com/toast)
- [LogRocket Blog](https://blog.logrocket.com/how-to-create-a-custom-toast-component-with-react/)

## License

MIT © [ajinkabeer](https://github.com/ajinkabeer)
