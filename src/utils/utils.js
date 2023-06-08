export async function fetchData(
  data,
  setGuess,
  setResult,
  setPokemon,
  setStatus
) {
  setStatus("loading");

  const response = await data.random();

  if (response) {
    setStatus("success");
    setGuess("");
    setResult(false);
    setPokemon(response);
  } else {
    setStatus("error");
  }
}

export function validateGuess(
  guess,
  pokemon,
  setGuess,
  setResult,
  setCorrect,
  setMistake
) {
  if (
    guess?.toUpperCase().replace(/\s/g, "") ===
    pokemon?.name?.toUpperCase().replace(/\s/g, "")
  ) {
    setGuess("");
    setResult(true);
    setCorrect((prevCorrect) => {
      const newCorrect = Number(prevCorrect) + 1;
      localStorage.setItem("correct", newCorrect);
      return newCorrect;
    });
  } else {
    setMistake((prevMistake) => {
      const newMistake = Number(prevMistake) + 1;
      localStorage.setItem("mistake", newMistake);
      return newMistake;
    });
  }
}
