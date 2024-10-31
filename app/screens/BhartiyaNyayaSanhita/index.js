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
import data from "../../../data/nyayaSanhita/NyayaSanhita.js";
import { howToUseNyayaSanhitaData } from "../../../data/nyayaSanhita/howToUse.js";
import HowToUse from "../../../components/HowToUse.js";

export default function BhartiyaNyayaSanhita() {
  //using hook to get filtered data and to setCodeOfSectionType
  const {
    nyayaSanhitaData,
    invalidSection,
    getInputValue,
    codeOfSectionType,
    setCodeOfSectionType,
  } = useFilteredData(data || []);

  const headerRight = () => {
    return (
      <View>
        <CustomScreenModal
          modalTitle="इस पृष्ठ में भारतीय दण्ड संहिता, 1860 की धाराओं से भारतीय न्याय संहिता 2023 की नई धाराओं को खोजने की प्रक्रिया को सरल रूप में समझाया गया है।"
          modalContent={<HowToUse content={howToUseNyayaSanhitaData} />}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        screenTitle="भारतीय न्याय संहिता, 2023"
        headerRight={headerRight}
      />
      {invalidSection ? (
        <View style={styles.errorContainer}>
          <ErrorDisplay inputValue={invalidSection} law="nyayaSanhita" />
        </View>
      ) : (
        <FlatList
          data={nyayaSanhitaData}
          renderItem={({ item, index }) => (
            <InfoCardGroup
              upperSectionHeading="भारतीय दण्ड संहिता, 1860"
              downSectionHeading="भारतीय न्याय संहिता, 2023"
              prevCode={item.prevCode}
              prevCodeInfo={item.prevCodeInfo}
              newCode={item.newCode}
              newCodeInfo={item.newCodeInfo}
              colorIndex={index % lightColorArr.length} // Cycle through the colors
              codeOfSectionType={codeOfSectionType}
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
      <SearchBar
        getInputValueFn={getInputValue}
        codeOfSectionType={codeOfSectionType}
        setCodeOfSectionType={setCodeOfSectionType}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 5,
  },
  listContentContainer: {
    paddingBottom: 100, // Space for the search bar
    paddingHorizontal: 15,
    paddingTop: 15,
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
