import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
  const [accessory, setAccessory] = useState("");
  console.log({ accessory });
  return (
    <div className="container">
      <Home accessory={accessory} />
      <div className="controls">
        <button onClick={() => setAccessory("carrier")}>Change Carrier</button>
        <button onClick={() => setAccessory("footstep")}>
          Change Footstep
        </button>
        <button onClick={() => setAccessory("frontguard")}>
          Change Front Guard
        </button>
      </div>
    </div>
  );
}

export default App;
