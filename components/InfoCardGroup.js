import { View, Text, StyleSheet } from "react-native";
import DataCard from "./DataCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  darkBackGroundColorArr,
  lightBackGroundColorArr,
} from "../constants/colors.js";

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
      style={[
        styles.container,
        { backgroundColor: lightBackGroundColorArr[colorIndex] },
      ]}
    >
      {sectionChapter ? (
        <View
          style={[
            styles.sectionChapterWrapper,
            { backgroundColor: darkBackGroundColorArr[colorIndex] },
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
              color={darkBackGroundColorArr[colorIndex]}
            />
          </View>
        </>
      ) : null}
      {prevCode === "कोई पूर्व धारा नहीं" ? (
        <Text style={styles.newAddedSectionContainer}>
          यह एक नई जोड़ी गई धारा है।
        </Text>
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
  newAddedSectionContainer: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#10bd10",
    padding: 5,
    width: "100%",
    marginBottom: 5,
    borderRadius: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
});
