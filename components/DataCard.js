import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { DataTable } from "react-native-paper";
import { darkColorArr } from "../constants/colors";
import {
  cardLabelColor,
  cardDescriptionFontColor,
} from "../constants/colors.js";
import renderHighlightedText from "../helper/highlightText.js";

export default function DataCard({ heading, code, info, colorIndex }) {
  function renderArrayData(data) {
    const tableHead = [
      "अपराध",
      "भा० न्या0स02 023 की धारा जो लागू होती",
      "वह व्यक्ति जिसके द्वारा अपराध का शमन किया जा सकेगा।",
    ];

    return data.map((item, index) => (
      <View key={index} style={styles.textAndTableContainer}>
        {typeof item === "string" ? (
          <Text style={styles.rawText}>{renderHighlightedText(item)}</Text>
        ) : (
          <DataTable style={styles.tableContainer}>
            <Text style={styles.tableLabel}>सारणी:-</Text>

            {/* Table Header */}
            <DataTable.Header style={styles.tableHeader}>
              {tableHead.map((header, idx) => (
                <View key={idx} style={styles.headerCellContainer}>
                  <DataTable.Title
                    textStyle={styles.tableHeaderText}
                    numberOfLines={6}
                  >
                    {header}
                  </DataTable.Title>
                </View>
              ))}
            </DataTable.Header>

            {/* Table Rows */}
            {item.map((rowData, rowIndex) => (
              <DataTable.Row key={rowIndex} style={styles.tableRow}>
                {rowData.map((cellData, cellIndex) => (
                  <View key={cellIndex} style={styles.rowCellContainer}>
                    <DataTable.Cell>
                      <Text style={styles.tableCellText}>{cellData}</Text>
                    </DataTable.Cell>
                  </View>
                ))}
              </DataTable.Row>
            ))}
          </DataTable>
        )}
      </View>
    ));
  }

  return (
    <View
      style={[styles.codeContainer, { borderColor: darkColorArr[colorIndex] }]}
    >
      <View
        style={[
          styles.dataCardHeadingContainer,
          { backgroundColor: darkColorArr[colorIndex] },
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
            renderArrayData(info)
          ) : (
            <Text style={styles.description}>
              {renderHighlightedText(info)}{" "}
            </Text>
          )}
        </Text>
      </View>
    </View>
  );
}

//getting device screen width
const screenWidth = Dimensions.get("window").width;

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
    color: cardLabelColor,
  },
  descWrapper: {
    textAlign: "justify",
  },
  description: {
    fontSize: 22,
    color: cardDescriptionFontColor,
  },
  sectionWrapper: {
    marginBottom: 5,
  },
  textAndTableContainer: {
    width: screenWidth - 80,
    marginHorizontal: 20,
  },
  tableContainer: {
    marginBottom: 15,
  },
  tableHeader: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 0, // Remove default padding
  },
  headerCellContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#c5c5c5",
    borderBottomWidth: 4,
    padding: 8, // Consistent padding for header cells
    justifyContent: "center",
    alignItems: "center",
  },
  tableLabel: {
    fontSize: 22,
    marginBottom: 10,
    color: cardDescriptionFontColor,
  },
  tableHeaderText: {
    fontSize: 18,
    color: "#10bd10",
    fontWeight: "bold",
    textAlign: "justify",
  },
  tableRow: {
    paddingHorizontal: 0,
    backgroundColor: "#f1f0f0",
  },
  rowCellContainer: {
    flex: 1,
    padding: 8, 
    borderWidth: 1,
    borderColor: "#c5c5c5", 
    justifyContent: "center",
    alignItems: "center",
  },
  tableCellText: {
    fontSize: 18,
    color: cardDescriptionFontColor,
    textAlign: "justify",
  },
  rawText: {
    fontSize: 22,
    textAlign: "justify",
    marginBottom: 15,
    color: cardDescriptionFontColor,
  },
});
