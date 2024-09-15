import { View, Text, StyleSheet } from "react-native";
import { howToUseBnsContent } from "../../../data/screenContent/";

export default function BnsHowToComponent() {
  return (
    <View style={styles.BnsHowToContainer}>
      <Text>{howToUseBnsContent.partOne}</Text>
      <Text>{howToUseBnsContent.partTwo}</Text>
      <Text>{howToUseBnsContent.partThree}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  BnsHowToContainer: {
    flex: 1,
    width: "100%",
  },
});
