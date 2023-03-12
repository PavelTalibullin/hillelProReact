import { useReducer } from "react";

const App = () => {
  const initialState = { count: 0 };

  const reduser = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };

      default:
        return { count: state.count };
    }
  };

  const [state, dispatch] = useReducer(reduser, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };



  return (
    <div>
      <h1>count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;
