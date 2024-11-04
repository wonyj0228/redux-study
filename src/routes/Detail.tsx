import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ITodo } from '../module/reducer';

function Detail() {
  const { id } = useParams();
  const match = useSelector((state: ITodo[]) =>
    state.find((todo) => todo.id === id)
  );
  console.log(match);
  return (
    <div>
      <h1>Detail</h1>
      <h3>{`Text : ${match?.text}`}</h3>
      <h3>{`Created at : ${match?.id}`}</h3>
    </div>
  );
}

export default Detail;
