//managing invalid input from the user and filtering data according user input value.

import { useState } from "react";
import { sanitizedAndValidInput } from "../helper/sanitizedAndValidInput.js";

export const useFilteredData = (data) => {
  const [nyayaSanhitaData, setNyayaSanhitaData] = useState(data);
  const [invalidSection, setInvalidSection] = useState(null);

  //this function is converting english-number into hindi-number.
  function convertHindiToEnglishNumber(text) {
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

    //regexp "[०१२३४५६७८९]/g" checks for hindi_number only then converts them into english_number other wise  original input will be returned.
    return text.replace(
      /[०१२३४५६७८९]/g,
      (match) => hindiToEnglishMapping[match]
    );
  }

  function getInputValue(text) {
    //testing and converting hindi-number into english-number.
    processedText = convertHindiToEnglishNumber(text);

    if (!processedText) {
      setNyayaSanhitaData(data); // Show all data when input is cleared
      setInvalidSection(null);
      return;
    }

    //when input is not sanitized then set empty array.
    if (!sanitizedAndValidInput(processedText)) {
      setNyayaSanhitaData([]);
      setInvalidSection(processedText);
      return;
    }

    //when law section is invalid set empty array.
    if (processedText < 1 || processedText > 511) {
      setNyayaSanhitaData([]);
      setInvalidSection(processedText);
      return;
    }

    //otherwise set filtered data.
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
