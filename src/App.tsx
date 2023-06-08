import React from "react";
import GuessProvider from "./providers/GuessProvider";

import FormContainer from "./components/FormContainer/FormContainer";

function App() {
  return (
    <GuessProvider>
      <main className="bg">
        <FormContainer />
      </main>
    </GuessProvider>
  );
}

export default App;
