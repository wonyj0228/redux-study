import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { ITodo } from '../module/reducer';
import { useDispatch } from 'react-redux';
import { addAction, addAction2 } from '../module/actions';
import Todo from '../components/Todo';
import { add, toDos } from '../module/slice';
import { AppDispatch, RootState } from '..';

function Home() {
  const [text, setText] = useState('');
  const todoState = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(addAction(String(Date.now()), text));
    // dispatch(addAction2(String(Date.now()), text));
    dispatch(add({ id: String(Date.now()), text }));
    setText('');
  };

  return (
    <>
      <h1>TO DO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>
        {todoState.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

export default Home;
