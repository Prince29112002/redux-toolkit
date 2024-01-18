import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log('State', state);

  if (state.todo.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch data</button>
      {
        state.todo.data?.map((data) => (
          <div key={data.id}>
            <p>{data.category}</p>
            <p>{data.price}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;