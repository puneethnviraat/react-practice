import React from 'react';
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, resetCount } from './counterSlice';

const Counter = () => {
  const counter = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();
  const incrementNew = () => {
    dispatch(increment());
  };
  const decrementBy10 = () => {
    dispatch(decrement(10));
  };
  const reset = () => {
    dispatch(resetCount());
  };
  return (
    <div>
      <p className="title">Counter</p>
      <h1>{counter}</h1>

      <Button onClick={incrementNew} variant="success">
        Increment
      </Button>
      <Button onClick={reset} variant="primary">
        Reset
      </Button>
      <Button onClick={decrementBy10} variant="danger">
        Decrement By 10
      </Button>
    </div>
  );
};

export default Counter;
