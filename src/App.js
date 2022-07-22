import "./App.css";
import { useLocaleStorage } from "./useLocalStorage";

function App() {
  const [value, setValue] = useLocaleStorage("name", "");

  return (
    <div className="App">
      <input
        id="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
