import { View, Text, StyleSheet, Dimensions } from "react-native";
import { DataTable } from "react-native-paper";
import { cardDescriptionFontColor } from "../constants/colors";

//rendering array data into table and raw text.
export default function renderArrayDataIntoTable(arrayData) {
  const tableHead = [
    "अपराध",
    "भा० न्या0स02 023 की धारा जो लागू होती",
    "वह व्यक्ति जिसके द्वारा अपराध का शमन किया जा सकेगा।",
  ];

  return arrayData.map((item, index) => (
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

//getting device screen width
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
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
