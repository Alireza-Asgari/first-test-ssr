import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore
        impedit unde nobis porro amet labore ab dicta iusto nam quaerat nisi,
        delectus tempora adipisci obcaecati temporibus iure at in!
      </p>
      <button>button</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, tenetur
        architecto magnam dolore placeat cumque sapiente, facilis magni
        exercitationem eaque dignissimos libero ex. Minima sint dolore ut, sunt
        consectetur quam!
      </p>
    </>
  );
}

export default App;
