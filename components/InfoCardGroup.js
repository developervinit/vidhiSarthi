import { View, Text, StyleSheet } from "react-native";
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
  sectionChapter,
  codeOfSectionType,
}) {
  return (
    <View
      style={[styles.container, { backgroundColor: lightColorArr[colorIndex] }]}
    >
      {sectionChapter ? (
        <View
          style={[
            styles.sectionChapterWrapper,
            { backgroundColor: darkColorArr[colorIndex] },
          ]}
        >
          <Text style={[styles.sectionChapterStyle, { color: "white" }]}>
            {sectionChapter}
          </Text>
        </View>
      ) : null}

      {/* hide first dataCard according the code of section type */}
      {codeOfSectionType !== "newCode" ? (
        <>
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
        </>
      ) : null}

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
  sectionChapterWrapper: {
    border: 1,
    borderColor: "black",
    width: "100%",
    marginBottom: 8,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  sectionChapterStyle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
