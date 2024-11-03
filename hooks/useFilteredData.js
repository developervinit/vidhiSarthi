import { useState } from "react";
import { sanitizedAndValidInput } from "../helper/sanitizedAndValidInput.js";

export const useFilteredData = (data) => {
  const [dataOfLaw, setDataOfLaws] = useState(data);
  const [isCodeOfInvalidSection, setCodeOfInvalidSection] = useState(null);
  const [codeOfSectionType, setCodeOfSectionType] = useState("prevCode");

  // Convert Hindi numbers to English numbers
  function convertHindiToEnglishNumber(text) {
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

  function getInputValue(text) {
    const processedText = convertHindiToEnglishNumber(text).trim();

    if (!processedText) {
      setDataOfLaws(data); // Show all data when input is cleared
      setCodeOfInvalidSection(null);
      return;
    }

    // Relaxed validation for partial input
    if (!sanitizedAndValidInput(processedText)) {
      setDataOfLaws([]);
      setCodeOfInvalidSection(processedText);
      return;
    }

    // Filter data based on codeOfSectionType and partial matching
    const result = data.filter((item) => {
      const itemCode = item[codeOfSectionType];

      //filtering data using startWith() method.
      return itemCode.startsWith(processedText);
    });

    if (result.length === 0) {
      setDataOfLaws([]);
      setCodeOfInvalidSection(processedText);
    } else {
      setDataOfLaws(result);
      setCodeOfInvalidSection(null);
    }
  }

  return {
    dataOfLaw,
    isCodeOfInvalidSection,
    getInputValue,
    codeOfSectionType,
    setCodeOfSectionType,
  };
};
