import { View, Text, StyleSheet } from "react-native";

export default function ErrorDisplay({ inputValue, law, codeOfSectionType }) {
  const lawInformation = [
    {
      oldLaw: {
        lawN: "इंडियन एवीडेंस एक्ट 1872",
        range: "1 से 167",
      },
      newLaw: {
        lawN: "भारतीय साक्ष्य अधिनियम 2023",
        range: "1 से 170",
      },
    },
    {
      oldLaw: {
        lawN: "भारतीय दण्ड संहिता, 1860",
        range: "1 से 511",
      },
      newLaw: {
        lawN: "भारतीय न्याय संहिता, 2023",
        range: "1 से 356",
      },
    },
    {
      oldLaw: {
        lawN: "दण्ड प्रक्रिया संहिता 1873",
        range: "1 से 484",
      },
      newLaw: {
        lawN: "भारतीय नागरिक सुरक्षा संहिता 2023",
        range: "1 से 533",
      },
    },
  ];

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
  lawName = lawInformation[lawIndex][lawType]["lawN"];
  sectionRange = lawInformation[lawIndex][lawType]["range"];

  return (
    <View style={styles.errorCard}>
      <Text style={styles.errorMassage}>
        आपके द्वारा दर्ज की गयी धारा
        <Text style={styles.errorTexT}> {inputValue} </Text> अमान्य है यह
        <Text style={styles.errorTexT}> {lawName} </Text>का हिस्सा नहीं है।{" "}
        {lawName} में धारा <Text style={styles.errorTexT}>{sectionRange}</Text>{" "}
        तक ही शामिल हैं। कृपया मान्य धारा दर्ज करें।
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorCard: {
    width: "95%",
    maxWidth: 350,
    borderRadius: 10,
    elevation: 4,
    marginBottom: 15,
    backgroundColor: "#ff5b5b",
    padding: 15,
  },
  errorMassage: {
    color: "white",
    fontSize: 22,
  },
  errorTexT: {
    color: "#591212",
    fontSize: 22,
    fontWeight: "600",
  },
});
