import { View, StyleSheet } from "react-native";
import DataCard from "./DataCard";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function InfoCardGroup({
  prevCode,
  prevCodeInfo,
  newCode,
  newCodeInfo,
}) {
  return (
    <View style={styles.container}>
      <DataCard
        heading="भारतीय दण्ड संहिता, 1860"
        code={prevCode}
        info={prevCodeInfo}
      />
      <View>
        <AntDesign name="arrowdown" size={28} color="#227abe" />
      </View>
      <DataCard
        heading="भारतीय न्याय संहिता, 2023"
        code={newCode}
        info={newCodeInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bde1fd",
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    elevation: 4,
  },
});
