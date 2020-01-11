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
