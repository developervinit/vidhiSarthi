import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import InfoCardGroup from "../../../components/InfoCardGroup.js";
import CustomHeader from "../../../components/CustomHeader.js";
import SearchBar from "../../../components/searchBar/SearchBar.js";
import { lightColorArr } from "../../../constants/colors.js";
import ErrorDisplay from "../../../components/ErrorDisplay.js";
import { useFilteredData } from "../../../hooks/useFilteredData.js";
import CustomScreenModal from "../../../components/modals/CustomScreenModal.js";
import HowToUse from "../../../components/HowToUse.js";
import data from "../../../data/sakshyaAdiniyam.js"

export default function SakshyaAdhiniyam() {
  const headerRight = () => {
    return (
      <View>
        <CustomScreenModal
          modalTitle="भारतीय साक्ष्य अधिनियम, 2023 में नई धारा कैसे खोजें?"
          modalContent={<HowToUse content={null} />}
        />
      </View>
    );
  };

  const { nyayaSanhitaData, invalidSection, getInputValue } = useFilteredData(
    data || []
  );

  return (
    <View style={styles.container}>
      <CustomHeader
        screenTitle="भारतीय साक्ष्य अधिनियम, 2023"
        headerRight={headerRight}
      />
      {invalidSection ? (
        <View style={styles.errorContainer}>
          <ErrorDisplay inputValue={invalidSection} />
        </View>
      ) : (
        <FlatList
          data={nyayaSanhitaData}
          renderItem={({ item, index }) => (
            <InfoCardGroup
              prevCode={item.prevCode}
              prevCodeInfo={item.prevCodeInfo}
              newCode={item.newCode}
              newCodeInfo={item.newCodeInfo}
              colorIndex={index % lightColorArr.length} // Cycle through the colors
            />
          )}
          keyExtractor={(item) => item.id.toString()} // Ensure the keyExtractor returns a string
          ListEmptyComponent={
            <Text style={styles.ListEmptyComponentStyle}>
              धाराओं का संग्रह अभी उपलब्ध नहीं है!
            </Text>
          }
          contentContainerStyle={styles.listContentContainer}
        />
      )}
      <SearchBar getInputValueFn={getInputValue} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  listContentContainer: {
    paddingBottom: 100, // Space for the search bar
  },
  ListEmptyComponentStyle: {
    fontSize: 20,
    backgroundColor: "#ff5b5b",
    color: "#fff",
    textAlign: "center",
    marginTop: 100,
    paddingVertical: 10,
    borderRadius: 5,
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});
