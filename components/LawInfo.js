import { View, Text, StyleSheet } from "react-native";
import highlightText from "../helper/highlightText.js";
import { howToContentColor } from "../constants/colors.js";

export default LawInfo = ({ content }) => {
  return (
    <>
      <View>
        <Text style={styles.noticeTextWrapper}>
          <Text style={styles.noticeTextHead}>सूचना: </Text>
          {highlightText(
            "%जोडी% गयी धाराऐं एवं उपधाराऐं %हरे रंग% में दर्शायी गई है और $हटायी$ गयी धाराऐं एवं उपधाराऐं $लाल रंग$ में दर्शायी गई है।"
          )}
        </Text>
      </View>
      {content.map((item, index) => {
        return (
          <View style={styles.lawInfoContainer} key={index}>
            <Text style={styles.lawInfoContentWrapper}>
              <Text style={styles.newLineBulletsStyle}>{index + 1}. </Text>
              {highlightText(item)}
            </Text>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  lawInfoContainer: {
    flex: 1,
    marginBottom: 5,
  },
  lawInfoContentWrapper: {
    fontSize: 20,
    textAlign: "justify",
    color: howToContentColor,
  },
  newLineBulletsStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  noticeTextWrapper: {
    fontSize: 20,
    textAlign: "justify",
    color: howToContentColor,
    marginBottom: 10,
  },
  noticeTextHead: {
    fontWeight: "bold",
  },
});
