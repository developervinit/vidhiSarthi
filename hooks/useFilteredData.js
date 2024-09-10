//managing invalid input from the user and filtering data according user input value.

import { useState } from "react";
import data from "../data/NyayaSanhita.js";
import { sanitizedAndValidInput } from "../helper/sanitizedAndValidInput.js";

export const useFilteredData = () => {
  const [nyayaSanhitaData, setNyayaSanhitaData] = useState(data);
  const [invalidSection, setInvalidSection] = useState(null);

  //this function is converting english-number into hindi-number.
  function convertHindiToEnglishNumber(text) {
    // Check if the input contains any Hindi numerals (०-९)
    const hindiNumeralsRegex = /[०१२३४५६७८९]/;

    //if input is hindi-number only then convert hindi number into english-number.
    if (hindiNumeralsRegex.test(text)) {
      // Replace Hindi numerals with corresponding English numerals
      const hindiToEnglishMapping = {
        "०": "0",
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
      };

      return text.replace(
        /[०१२३४५६७८९]/g,
        (match) => hindiToEnglishMapping[match]
      );
    }

    // If no Hindi numerals found, return the original text
    return text;
  }

  function getInputValue(text) {

    //testing and converting hindi-number into english-number.
    processedText = convertHindiToEnglishNumber(text);

    if (!processedText) {
      setNyayaSanhitaData(data); // Show all data when input is cleared
      setInvalidSection(null);
      return;
    }

    if (!sanitizedAndValidInput(processedText)) {
      setNyayaSanhitaData([]);
      setInvalidSection(processedText);
      return;
    }

    if (processedText < 1 || processedText > 511) {
      setNyayaSanhitaData([]);
      setInvalidSection(processedText);
      return;
    }

    const result = data.filter((item) => item.prevCode === processedText);
    if (result.length === 0) {
      setNyayaSanhitaData(result);
      setInvalidSection(processedText);
    } else {
      setNyayaSanhitaData(result);
      setInvalidSection(null);
    }
  }

  return { nyayaSanhitaData, invalidSection, getInputValue };
};
