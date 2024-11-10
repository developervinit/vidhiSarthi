import { View, Text, StyleSheet } from "react-native";
import lawDataForErrorDisplay from "../data/errorData/wrongSectionErrorData.js";
import errorDataSelection from "../helper/errorDataSelection.js";

export default function ErrorDisplay({ inputValue, law, codeOfSectionType }) {
  const [lawName, sectionRange] = errorDataSelection(
    lawDataForErrorDisplay,
    law,
    codeOfSectionType
  );

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
