import { View, StyleSheet } from "react-native";
import DataCard from "./DataCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import { darkColorArr, lightColorArr } from "../constants/colors.js";

export default function InfoCardGroup({
  prevCode,
  prevCodeInfo,
  newCode,
  newCodeInfo,
  colorIndex,
  upperSectionHeading,
  downSectionHeading,
}) {
  return (
    <View
      style={[styles.container, { backgroundColor: lightColorArr[colorIndex] }]}
    >
      <DataCard
        heading={upperSectionHeading}
        code={prevCode}
        info={prevCodeInfo}
        colorIndex={colorIndex}
      />
      <View>
        <AntDesign
          name="arrowdown"
          size={28}
          color={darkColorArr[colorIndex]}
        />
      </View>
      <DataCard
        heading={downSectionHeading}
        code={newCode}
        info={newCodeInfo}
        colorIndex={colorIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    elevation: 4,
  },
});
