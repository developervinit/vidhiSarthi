//This function is to select error-massage according the codeOfSectionType.
export default function errorDataSelection(
  lawErrorResponseData,
  law,
  codeOfSectionType
) {
  // Define a mapping for the law names to indexes in lawInformation
  const lawIndexMap = {
    sakshyaAdhiniyam: 0,
    nyayaSanhita: 1,
    nagrikSuraksha: 2,
  };

  // Get the index for the current law
  const lawIndex = lawIndexMap[law] ?? 2; //Fallback to index 2 if law is undefined in lawIndexMap

  // Determine if we're using "oldLaw" or "newLaw" based on codeOfSectionType
  const lawType = codeOfSectionType === "prevCode" ? "oldLaw" : "newLaw";

  // Access the law information dynamically
  let lawName = lawErrorResponseData[lawIndex][lawType]["lawN"];
  let sectionRange = lawErrorResponseData[lawIndex][lawType]["range"];

  return [lawName, sectionRange];
}
