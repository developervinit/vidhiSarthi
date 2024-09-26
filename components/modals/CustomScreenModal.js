import CustomModal from "./CustomModal.js";
import { View, Text, StyleSheet } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { headerHeadingColor } from "../../constants/colors.js";

export default function CustomScreenModal({ modalTitle, modalContent }) {
  // onStartShouldSetResponder={() => true} is used to stop event propagation/bubbling to parent element which is also having some event handler.
  const homeScreen = (
    <View
      style={styles.homeScreenContentContainer}
      onStartShouldSetResponder={() => true}
    >
      <Text style={styles.homeScreenModalTitle}>{modalTitle}</Text>
      <View style={styles.separator}></View>
      <View style={styles.homeScreenContent}>{modalContent}</View>
    </View>
  );

  return (
    <CustomModal content={homeScreen}>
      <View>
        <AntDesign
          name="questioncircleo"
          size={28}
          color={headerHeadingColor}
        />
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  homeScreenContentContainer: {
    padding: 10,
    width: "100%",
  },
  homeScreenModalTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  homeScreenContent: {
    flexWrap: "wrap",
    textAlign: "justify",
  },
  separator: {
    width: 200,
    height: 1,
    backgroundColor: "black",
    marginVertical: 10
  }
});
