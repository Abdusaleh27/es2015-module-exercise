import React from "react";
import foods from "./foods";
import { choice,remove } from "./helpers";
const App =() => {
  let fruit = choice(foods);
  remove(foods,fruit);
  return(
    <>
      <p>I'd like one {fruit}, please.</p>
      <p>Here you go: {fruit}</p>
      <p>Delicious! May I have another?</p>
      <p>{foods.length <= 0 ? "I'm sorry, we're all out" : `We have ${foods.length} left`}</p>
    </>
  );
}

export default App;