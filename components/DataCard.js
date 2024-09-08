import { View, Text, StyleSheet } from "react-native";
import { darkColorArr } from "../constants/colors";
import { cardLabelColor, cardDescriptionFontColor } from "../constants/colors.js"; 

export default function DataCard({ heading, code, info, colorIndex }) {
  return (
    <View
      style={[styles.codeContainer, { borderColor: darkColorArr[colorIndex] }]}
    >
      <View
        style={[
          styles.dataCardHeadingContainer,
          { backgroundColor: darkColorArr[colorIndex] },
        ]}
      >
        <Text style={styles.dataCardHeading}>{heading}</Text>
      </View>
      <View style={styles.dataCardContentContainer}>
        <Text style={styles.lawWrapper}>
          <Text style={styles.label}>धारा: </Text>
          <Text style={styles.description}>{code}</Text>
        </Text>
        <Text>
          <Text style={styles.label}>शीर्षक: </Text>
          <Text style={styles.description}>{info}</Text>
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
    color: cardLabelColor,
  },
  description: {
    fontSize: 22,
    color: cardDescriptionFontColor,
  },
  lawWrapper: {
    marginBottom: 5,
  },
});
