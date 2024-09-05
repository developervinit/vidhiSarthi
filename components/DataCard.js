import { View, Text, StyleSheet } from "react-native";

export default function DataCard({ heading, code, info }) {
  return (
    <View style={styles.codeContainer}>
      <View>
        <Text style={styles.containerHeading}>{heading}</Text>
      </View>
      <View style={styles.separator}></View>
      <Text>
        <Text style={styles.label}>धारा: </Text>
        <Text style={styles.result}>{code}</Text>
      </Text>
      <Text>
        <Text style={styles.label}>शीर्षक: </Text>
        <Text style={styles.result}>{info}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  codeContainer: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgb(60 60 60)",
    borderWidth: 1,
    marginBottom: 14,
    padding: 20,
    paddingTop: 10,
  },
  containerHeading: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  separator: {
    backgroundColor: "black",
    height: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  label: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgb(60 60 60)",
  },
  result: {
    fontSize: 22,
    color: "rgb(98 98 98)",
  },
});
