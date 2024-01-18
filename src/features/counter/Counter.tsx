import { ChangeEvent, useState } from 'react';
import './Counter.css';
import { increment, decrement, addMount } from '../../reducer/counterSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Counter = () => {

  const [count, setCount] = useState(0);
  const currentValue = useSelector((state : RootState) => state.counter.value);
  

  const handlerInputValue = (evt : ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(evt.target.value))
  }

  return (
    <div className='counter'>
      <div className='counter_first'>
        <button className='counter__button'>-</button>
        <h2 className='counter__value'>{currentValue}</h2>
        <button className='counter__button'>+</button>
      </div>
      <div className="counter_second">
        <input
        value = {count}
        onChange={(evt) => handlerInputValue(evt)}
        type="text" />
        <button className='counter__button'></button>
      </div>
    </div>
  )
}

