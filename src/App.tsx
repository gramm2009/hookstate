import { useEffect } from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";


function App() {
  console.log("R App");

  return (
    <div className="App">
      <Comp1/>
      <Comp2/>
    </div>
  );
}

export default App;
