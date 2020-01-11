import * as React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import buildContext from ".";

const Context = buildContext(() => {
  const [count, setCount] = React.useState(0);
  const increment = React.useCallback(() => setCount(prev => prev + 1), []);
  const decrement = React.useCallback(() => setCount(prev => prev - 1), []);
  return { state: { count }, actions: { increment, decrement } };
});

const App = () => {
  return (
    <Context.Provider>
      <ExampleComponent />
    </Context.Provider>
  );
};

const ExampleComponent = () => {
  return (
    <Context.StateConsumer>
      {({ state }) => {
        return (
          <Context.ActionsConsumer>
            {({ actions }) => (
              <div>
                <span data-testid="count">{state.count}</span>
                <button data-testid="increment" onClick={actions.increment}>
                  increment
                </button>
                <button data-testid="decrement" onClick={actions.decrement}>
                  decrement
                </button>
              </div>
            )}
          </Context.ActionsConsumer>
        );
      }}
    </Context.StateConsumer>
  );
};

describe("createContext", () => {
  it("Should throw exception for not having a provider", () => {
    expect(() => {
      const {
        result: { current }
      } = renderHook(() => Context.useState());
    }).toThrow("Missing Provider for useState");
  });

  it("Should throw exception for not having a provider", () => {
    expect(() => {
      const {
        result: { current }
      } = renderHook(() => Context.useActions());
    }).toThrow("Missing Provider for useActions");
  });

  // it("Should throw exception for not having a provider", () => {
  //   // try {
  //   // } catch (err) {
  //   //   console.log("err", err);
  //   //   expect(err).toEqual("[Error: Missing Provider for StateConsumer]");
  //   // }
  //   expect(() => {
  //     render(
  //       <Context.StateConsumer>
  //         {({ state }) => <div>{state.count}</div>}
  //       </Context.StateConsumer>
  //     );
  //   }).toThrow("Missing Provider for StateConsumer");
  // });

  // it("Should throw exception for not having a provider", () => {
  //   expect(() =>
  //     render(
  //       <Context.ActionsConsumer>
  //         {({ actions }) => <div>0</div>}
  //       </Context.ActionsConsumer>
  //     )
  //   ).toThrow("Missing Provider for StateConsumer");
  // });

  it("Should have 0 as default value and increment to 1 then decrement to 0", () => {
    const { getByTestId } = render(<App />);
    const count = getByTestId("count");
    const increment = getByTestId("increment");
    const decrement = getByTestId("decrement");

    expect(count.textContent).toEqual("0");
    act(() => {
      fireEvent.click(increment);
    });
    expect(count.textContent).toEqual("1");
    act(() => {
      fireEvent.click(decrement);
    });
    expect(count.textContent).toEqual("0");
  });
});
