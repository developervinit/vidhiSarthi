import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  darkBackGroundColorArr,
  dataCardLabelColor,
  lawCardDescriptionFontColor,
  highlightRed,
} from "../constants/colors.js";
import renderHighlightedText from "../helper/highlightText.js";
import renderArrayDataIntoTable from "../helper/renderArrayDataIntoTable.js";

export default function DataCard({ heading, code, info, colorIndex }) {
  return (
    <View
      style={[
        styles.codeContainer,
        { borderColor: darkBackGroundColorArr[colorIndex] },
      ]}
    >
      <View
        style={[
          styles.dataCardHeadingContainer,
          { backgroundColor: darkBackGroundColorArr[colorIndex] },
        ]}
      >
        <Text style={styles.dataCardHeading}>{heading}</Text>
      </View>
      <View style={styles.dataCardContentContainer}>
        <Text style={styles.sectionWrapper}>
          <Text style={styles.label}>धारा: </Text>
          <Text style={styles.description}>{code}</Text>
        </Text>
        <Text style={styles.descWrapper}>
          <Text style={styles.label}>शीर्षक: </Text>
          {Array.isArray(info) ? (
            renderArrayDataIntoTable(info)
          ) : (
            <Text style={styles.description}>
              {info === "निरसित" ? (
                <Text style={{ color: highlightRed }}>{info}</Text>
              ) : (
                renderHighlightedText(info)
              )}
            </Text>
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  codeContainer: {
    width: "100%",
    fontSize: 22,
    fontWeight: "bold",
    borderWidth: 3,
    borderRadius: 5,
  },
  dataCardHeadingContainer: {
    padding: 10,
  },
  dataCardHeading: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  dataCardContentContainer: {
    padding: 10,
    textAlign: "justify",
  },
  label: {
    fontSize: 22,
    fontWeight: "bold",
    color: dataCardLabelColor,
  },
  descWrapper: {
    textAlign: "justify",
  },
  description: {
    fontSize: 22,
    color: lawCardDescriptionFontColor,
  },
  sectionWrapper: {
    marginBottom: 5,
  },
});
