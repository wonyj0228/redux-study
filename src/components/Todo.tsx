import { useDispatch } from 'react-redux';
import { dltAction, dltAction2 } from '../module/actions';
import { ITodo } from '../module/reducer';
import { Link } from 'react-router-dom';
import { AppDispatch } from '..';
import { remove } from '../module/slice';

function Todo({ id, text }: ITodo) {
  const dispatch = useDispatch<AppDispatch>();

  const onClick = () => {
    // dispatch(dltAction(id));
    // dispatch(dltAction2(id));
    dispatch(remove(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
}

export default Todo;
