import CustomModal from "./CustomModal";
import { View, Text, StyleSheet } from "react-native";
import { homeScreenContent } from "../data/screenContent.js";
import AntDesign from "@expo/vector-icons/AntDesign";
import { headerHeadingColor } from "../constants/colors.js";

export default function HomeScreenModal() {
  // onStartShouldSetResponder={() => true} is used to stop event propagation/bubbling to parent element which is also having some event handler.
  const homeScreen = (
    <View
      style={styles.homeScreenContentContainer}
      onStartShouldSetResponder={() => true}
    >
      <Text style={styles.homeScreenModalTitle}>
        होम स्क्रीन का उपयोग कैसे करें
      </Text>
      <Text style={styles.homeScreenContent}>{homeScreenContent}</Text>
    </View>
  );

  return (
    <CustomModal content={homeScreen}>
      <View>
          <AntDesign name="infocirlceo" size={28} color={headerHeadingColor} />
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
    marginBottom: 10,
  },
  homeScreenContent: {
    fontSize: 18,
    flexWrap: "wrap",
    textAlign: "justify",
  },
});
