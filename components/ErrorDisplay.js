import { View, Text, StyleSheet } from "react-native";
import lawDataForErrorDisplay from "../data/errorData/wrongSectionErrorData.js";

export default function ErrorDisplay({ inputValue, law, codeOfSectionType }) {
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
  lawName = lawDataForErrorDisplay[lawIndex][lawType]["lawN"];
  sectionRange = lawDataForErrorDisplay[lawIndex][lawType]["range"];

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
