import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNumberAction, clearListAction } from '../redux/actions';

function NumberList() {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.numbers.list);

  const handleAdd = () => {
    const sum = list.length ? list[list.length - 1] + number : number;
    dispatch(addNumberAction(sum));
    setNumber(0);
  };

  const handleClear = () => {
    dispatch(clearListAction());
  };

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(+e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClear}>Clear</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default NumberList