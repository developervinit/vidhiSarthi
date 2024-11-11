import { View, Text, StyleSheet } from "react-native";
import highlightText from "../helper/highlightText.js";
import { howToContentColor } from "../constants/colors.js";
import uuid from "react-native-uuid";

export default LawInfo = ({ content }) => {
  return (
    <>
      {content.map((item, index) => {
        return index === 0 && item !== "" ? (
          <View key={uuid.v4()}>
            <Text style={styles.noticeTextWrapper}>
              <Text style={styles.noticeTextHead}>सूचना: </Text>
              {highlightText(item)}
            </Text>
          </View>
        ) : index === 0 ? null : (
          <View style={styles.lawInfoContainer} key={uuid.v4()}>
            <Text style={styles.lawInfoContentWrapper}>
              <Text style={styles.newLineBulletsStyle}>{index}. </Text>
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
    color: "#4c4b4b"
  },
  noticeTextWrapper: {
    fontSize: 20,
    textAlign: "justify",
    color: howToContentColor,
    marginBottom: 10,
  },
  noticeTextHead: {
    fontWeight: "bold",
    color: "#4c4b4b"
  },
});
