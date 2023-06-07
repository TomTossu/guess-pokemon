import React from "react";
import GuessProvider from "./providers/GuessProvider";

import FormContainer from "./components/FormContainer/FormContainer";

function App() {
  return (
    <GuessProvider>
      <FormContainer />
    </GuessProvider>
  );
}

export default App;
