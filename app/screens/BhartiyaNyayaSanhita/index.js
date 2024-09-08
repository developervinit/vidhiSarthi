import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import InfoCardGroup from "../../../components/InfoCardGroup.js";
import data from "../../../data/NyayaSanhita.js";
import Header from "../../../components/Header.js";
import SearchBar from "../../../components/SearchBar.js";

export default function BhartiyaNyayaSanhita() {
  const [value, setValue] = useState(data); // Initialize with full data
  const colorArr = ["#bde1fd", "#e3d9ee", "#ebeed9"];

  //filtering data on input value.
  function getInputValue(text) {
    if (text === "") {
      setValue(data); // Show all data when input is cleared
    } else {
      const result = data.filter((item) => item.prevCode === text);
      setValue(result);
    }
  }

  return (
    <View style={styles.container}>
      <Header screenTitle="भारतीय न्याय संहिता, 2023" />
      <FlatList
        data={value}
        renderItem={({ item, index }) => (
          <InfoCardGroup
            prevCode={item.prevCode}
            prevCodeInfo={item.prevCodeInfo}
            newCode={item.newCode}
            newCodeInfo={item.newCodeInfo}
            colorIndex={index % colorArr.length} // Cycle through the colors
            colorArr={colorArr} // Pass the color array
          />
        )}
        keyExtractor={(item) => item.id.toString()} // Ensure the keyExtractor returns a string
        ListEmptyComponent={
          <Text style={styles.listPlaceholderText}>
            परिणाम यहाँ प्रदर्शित किया जाएगा
          </Text>
        }
        contentContainerStyle={styles.listContentContainer}
      />
      <SearchBar getInputValueFn={getInputValue} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  header: {
    position: "relative",
    backgroundColor: "rgb(195 195 195)",
    height: 72,
    paddingLeft: 10,
    borderRadius: 5,
    display: "flex",
    top: 25,
    left: 0,
    right: 0,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 40,
  },
  innerContainer: {
    flex: 1,
  },
  listContentContainer: {
    paddingBottom: 100, // Space for the search bar
  },
  listPlaceholderText: {
    fontSize: 24,
    color: "rgb(195 195 195)",
    textAlign: "center",
    marginTop: 100,
  },
  appTitle: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
    textAlign: "center",
    marginBottom: 15,
  },
});
