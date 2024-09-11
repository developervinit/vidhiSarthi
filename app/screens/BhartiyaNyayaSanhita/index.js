import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import InfoCardGroup from "../../../components/InfoCardGroup.js";
import Header from "../../../components/Header.js";
import SearchBar from "../../../components/SearchBar.js";
import { lightColorArr } from "../../../constants/colors.js";
import ErrorDisplay from "../../../components/ErrorDisplay.js";
import { useFilteredData } from "../../../hooks/useFilteredData.js";

export default function BhartiyaNyayaSanhita() {
  const { nyayaSanhitaData, invalidSection, getInputValue } = useFilteredData();

  return (
    <View style={styles.container}>
      <Header screenTitle="भारतीय न्याय संहिता, 2023" />
      {invalidSection ? (
        <View style={styles.errorContainer}>
          <ErrorDisplay
            inputValue={invalidSection}
          />
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
            <Text style={styles.listPlaceholderText}>
              <ErrorDisplay
                errorMassage={"धाराओं का संग्रह अभी उपलब्ध नहीं है "}
              />
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
  listPlaceholderText: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    marginTop: 100,
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});
