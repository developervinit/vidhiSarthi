import { View, Text, StyleSheet, ScrollView } from "react-native";
import { aboutScreenContent } from "../../../data/aboutScreen/aboutScreenContent.js";
import CustomHeader from "../../../components/CustomHeader.js";
import { titleColor, contentColor } from "../../../constants/colors.js";

export default function About() {
  return (
    <>
      <CustomHeader screenTitle="विधि सारथी ऐप परिचय" />
      <ScrollView>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutHeading}>
            विधि सारथी ऐप का उद्देश्य और इसका उपयोग कैसे करें?
          </Text>
          <Text style={styles.aboutContent}>{aboutScreenContent}</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    width: "100%",
    padding: 20,
  },
  aboutHeading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "justify",
    marginBottom: 15,
    color: titleColor
  },
  aboutContent: {
    fontSize: 18,
    textAlign: "justify",
    color: contentColor
  },
});
