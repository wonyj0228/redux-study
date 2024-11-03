function Todo({ text }: { text: string }) {
  return (
    <li>
      {text} <button>DEL</button>
    </li>
  );
}

export default Todo;
