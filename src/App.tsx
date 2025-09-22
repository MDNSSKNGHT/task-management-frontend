import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)} className="cursor-pointer">
        Click me
      </Button>
    </div>
  );
}

export default App;
