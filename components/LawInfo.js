import { View, Text, StyleSheet } from "react-native";
import highlightText from "../helper/highlightText.js";
import { howToContentColor } from "../constants/colors.js";

export default LawInfo = ({ content }) => {
  return content.map((item, index) => {
    return (
      <View style={styles.lawInfoContainer} key={index}>
        <Text style={styles.lawInfoContentWrapper}>
          <Text style={styles.newLineBulletsStyle}>{index + 1}. </Text>
          {highlightText(item)}
        </Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  lawInfoContainer: {
    flex: 1,
    marginBottom: 5,
  },
  lawInfoContentWrapper: {
    fontSize: 18,
    textAlign: "justify",
    color: howToContentColor,
  },
  newLineBulletsStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
