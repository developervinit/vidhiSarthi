import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import List from "./components/List.js";
import ImageViewer from "./components/ImageViewer.js";
import data from "./data/data.js";

export default function App() {
  const [value, setValue] = useState(data); // Initialize with full data

  const headImage = require("./assets/icon.png");

  function getValue(text) {
    if (text === "") {
      setValue(data); // Show all data when input is cleared
    } else {
      const result = data.filter((item) => item.prevCode === text);
      setValue(result);
    }
  }

  // const renderHeader = () => (
  //   <>
  //     <ImageViewer imageSource={headImage} />
  //     <View>
  //       <Text style={styles.appTitle}>न्याय सारथी</Text>
  //     </View>
  //   </>
  // );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <ImageViewer imageSource={headImage} />
        <View>
          <Text style={styles.appTitle}>विधि सारथी</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <FlatList
          // ListHeaderComponent={renderHeader}
          data={value}
          renderItem={({ item }) => (
            <List
              prevCode={item.prevCode}
              prevCodeInfo={item.prevCodeInfo}
              newCode={item.newCode}
              newCodeInfo={item.newCodeInfo}
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
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.input}
          placeholder="यहाँ पूर्व कानून दर्ज करें"
          onChangeText={(text) => getValue(text)}
          clearButtonMode="always" // Ensures the clear button is available on iOS
        />
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
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
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 350,
    borderRadius: 4,
    fontSize: 22,
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
  searchBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
});
