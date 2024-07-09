import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import { counterActions } from '../store/index'

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const show =  useSelector(state => state.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }

  const increamentHandler = () => {
    dispatch(counterActions.increment())
  };

  const decreamentHandler = () => {
    dispatch(counterActions.decrement())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>increament</button>
        <button onClick={increaseHandler}>increamentby5</button>
        <button onClick={decreamentHandler}>decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
