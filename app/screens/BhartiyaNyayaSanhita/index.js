import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import InfoCardGroup from "../../../components/InfoCardGroup.js";
import data from "../../../data/NyayaSanhita.js";
import Header from "../../../components/Header.js";
import SearchBar from "../../../components/SearchBar.js";
import { lightColorArr } from "../../../constants/colors.js";
import ErrorDisplay from "../../../components/ErrorDisplay.js";

export default function BhartiyaNyayaSanhita() {
  const [value, setValue] = useState(data); // Initialize with full data
  const [invalidSection, setInvalidSection] = useState(null);

  //filtering data on input value.
  function getInputValue(text) {
    if (text === "") {
      setValue(data); // Show all data when input is cleared
      setInvalidSection(null);
    } else if (text < 1 || text > 511) {
      setValue([]);
      setInvalidSection(text);
    } else {
      const result = data.filter((item) => item.prevCode === text);
      setValue(result);
      setInvalidSection(null);
    }
  }

  return (
    <View style={styles.container}>
      <Header screenTitle="भारतीय न्याय संहिता, 2023" />
      {invalidSection ? (
        <View style={styles.errorContainer}>
          <ErrorDisplay
            errorMassage={`आपके द्वारा दर्ज की गयी धारा ${invalidSection} भारतीय दंड संहिता, 1860 का हिस्सा नहीं है। भारतीय दंड संहिता में धारा 1 से 511 तक ही शामिल हैं। कृपया मान्य धारा दर्ज करें।`}
          />
        </View>
      ) : (
        <FlatList
          data={value}
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
