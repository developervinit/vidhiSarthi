import { View, Text, StyleSheet } from "react-native";

export default function ErrorDisplay({ inputValue }) {
  return (
    <View style={styles.errorCard}>
      <Text style={styles.errorMassage}>
        आपके द्वारा दर्ज की गयी धारा{" "}
        <Text style={styles.errorTexT}>{inputValue}</Text> भारतीय दंड संहिता,{" "}
        <Text style={styles.errorTexT}>1860</Text> का हिस्सा नहीं है। भारतीय दंड
        संहिता में धारा <Text style={styles.errorTexT}>1 से 511</Text> तक ही
        शामिल हैं। कृपया मान्य धारा दर्ज करें।
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
