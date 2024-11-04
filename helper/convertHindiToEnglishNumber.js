


// Convert Hindi numbers to English numbers
export default function convertHindiToEnglishNumber(text) {
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