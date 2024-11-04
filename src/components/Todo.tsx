import { useDispatch } from 'react-redux';
import { dltAction } from '../module/actions';
import { ITodo } from '../module/reducer';
import { Link } from 'react-router-dom';

function Todo({ id, text }: ITodo) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(dltAction(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
}

export default Todo;
