import { useDispatch } from 'react-redux';
import { dltAction, dltAction2 } from '../module/actions';
import { ITodo } from '../module/reducer';
import { Link } from 'react-router-dom';

function Todo({ id, text }: ITodo) {
  const dispatch = useDispatch();

  const onClick = () => {
    // dispatch(dltAction(id));
    dispatch(dltAction2(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
}

export default Todo;
