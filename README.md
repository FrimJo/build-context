# build-context

>

[![NPM](https://img.shields.io/npm/v/build-context.svg)](https://www.npmjs.com/package/build-context) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save build-context
```

## Usage

```tsx
import React, { Component } from "react";

import buildContext from "build-context";

const Context = buildContext(() => {
  const [count, setCount] = React.useState(0);
  const increment = React.useCallback(() => setCount(prev => prev + 1), []);
  const decrement = React.useCallback(() => setCount(prev => prev - 1), []);
  return { state: { count }, actions: { increment, decrement } };
});

export default class App extends Component {
  render() {
    return (
      <Context.Provider>
        <ExampleComponent />
      </Context.Provider>
    );
  }
}

const ExampleComponent = () => {
  const { count } = Context.useState();
  const { increment, decrement } = Context.useActions();
  return (
    <div>
      {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
```

## License

MIT © [FrimJo](https://github.com/FrimJo)
