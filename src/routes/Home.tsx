import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { ITodo } from "../module/reducer";
import { useDispatch } from "react-redux";
import { addAction } from "../module/actions";
import Todo from "../components/Todo";

function Home() {
  const [text, setText] = useState("");
  const todoState = useSelector((state: ITodo[]) => state);
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addAction(String(Date.now()), text));
    setText("");
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