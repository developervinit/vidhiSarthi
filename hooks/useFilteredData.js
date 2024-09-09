//managing invalid input from the user and filtering data according user input value.

import { useState } from "react";
import data from "../data/NyayaSanhita.js";
import { sanitizedAndValidInput } from "../helper/sanitizedAndValidInput.js";

export const useFilteredData = () => {
  const [nyayaSanhitaData, setNyayaSanhitaData] = useState(data);
  const [invalidSection, setInvalidSection] = useState(null);

  function getInputValue(text) {
    if (!text) {
      setNyayaSanhitaData(data); // Show all data when input is cleared
      setInvalidSection(null);
      return;
    }

    if (!sanitizedAndValidInput(text)) {
      setNyayaSanhitaData([]);
      setInvalidSection(text);
      return;
    }

    if (text < 1 || text > 511) {
      setNyayaSanhitaData([]);
      setInvalidSection(text);
      return;
    }

    const result = data.filter((item) => item.prevCode === text);
    if (result.length === 0) {
      setNyayaSanhitaData(result);
      setInvalidSection(text);
    } else {
      setNyayaSanhitaData(result);
      setInvalidSection(null);
    }
  }

  return { nyayaSanhitaData, invalidSection, getInputValue };
};
