import React, { useReducer } from 'react';

import Button from 'react-bootstrap/Button';

const Example1 = () => {
  const initialState = { count: 1 };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase': {
        return { count: state.count + 1 };
      }
      case 'decrease': {
        return { count: state.count - 1 };
      }
      case 'input': {
        return { count: action.payload };
      }

      default:
        return { state };
    }
  };

  const [state, dispatchEvent] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Example1</p>
      <h3>
        Counter using <b> useReduce </b>hook
      </h3>
      <h1>{state.count}</h1>
      <Button
        variant="primary"
        onClick={() => dispatchEvent({ type: 'increase' })}
      >
        Increase
      </Button>
      <Button
        variant="danger"
        onClick={() => dispatchEvent({ type: 'decrease' })}
      >
        Decrease
      </Button>
      <br></br>
      <input
        type="number"
        value={state.count}
        onChange={(e) =>
          dispatchEvent({ type: 'input', payload: Number(e.target.value) })
        }
      />
    </div>
  );
};

export default Example1;
