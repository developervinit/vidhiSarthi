import { View, Text, StyleSheet } from "react-native";

export default function DataCard({
  heading,
  code,
  info,
  colorIndex,
  colorArr,
}) {
  return (
    <View style={[styles.codeContainer, { borderColor: colorArr[colorIndex] }]}>
      <View
        style={[
          styles.dataCardHeadingContainer,
          { backgroundColor: colorArr[colorIndex] },
        ]}
      >
        <Text style={styles.dataCardHeading}>{heading}</Text>
      </View>
      <View style={styles.dataCardContentContainer}>
        <Text style={styles.lawWrapper}>
          <Text style={styles.label}>धारा: </Text>
          <Text style={styles.result}>{code}</Text>
        </Text>
        <Text>
          <Text style={styles.label}>शीर्षक: </Text>
          <Text style={styles.result}>{info}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  codeContainer: {
    width: "100%",
    fontSize: 22,
    fontWeight: "bold",
    borderWidth: 3,

    borderRadius: 5,
  },
  dataCardHeadingContainer: {
    padding: 10,
  },
  dataCardHeading: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  dataCardContentContainer: {
    padding: 15,
  },
  label: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0e314c",
  },
  result: {
    fontSize: 22,
    color: "#144367",
  },
  lawWrapper: {
    marginBottom: 5,
  },
});
