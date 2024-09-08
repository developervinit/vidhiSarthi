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
}) {
  return (
    <View style={[styles.container, { backgroundColor: lightColorArr[colorIndex] }]}>
      <DataCard
        heading="भारतीय दण्ड संहिता, 1860"
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
        heading="भारतीय न्याय संहिता, 2023"
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
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    elevation: 4,
  },
});
