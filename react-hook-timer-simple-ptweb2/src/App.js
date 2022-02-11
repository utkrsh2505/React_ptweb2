import { Counter } from "./Components/Counter";
import "./styles.css";

export default function App() {
  let start = 2;
  let end = 10;
  return (
    <div className="App">
      <Counter start={start} end={end} />
    </div>
  );
}
