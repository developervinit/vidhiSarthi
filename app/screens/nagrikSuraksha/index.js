import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import InfoCardGroup from "../../../components/InfoCardGroup.js";
import CustomHeader from "../../../components/CustomHeader.js";
import SearchBar from "../../../components/searchBar/SearchBar.js";
import {
  lightBackGroundColorArr,
  headerHeadingColor,
} from "../../../constants/colors.js";
import ErrorDisplay from "../../../components/ErrorDisplay.js";
import { useFilteredData } from "../../../hooks/useFilteredData.js";
import CustomScreenModal from "../../../components/modals/CustomScreenModal.js";
import HowToUse from "../../../components/HowToUse.js";
import data from "../../../data/nagrikSuraksha/nagrikSurkshaData.js";
import LawInfo from "../../../components/LawInfo.js";
import bnssInfoData from "../../../data/nagrikSuraksha/bnssInfoData.js";
import { howToUseNagrikSuraksha } from "../../../data/nagrikSuraksha/howToUseData.js";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function NagrikSuraksha() {
  const flatListRef = useRef(null); //to get reference of FlatList

  const headerRight = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 10,
        }}
      >
        <CustomScreenModal
          modalTitle="भारतीय नागरिक सुरक्षा संहिता 2023 के अंतर्गत नए प्रावधान और संशोधन का सारांश।"
          modalContent={<LawInfo content={bnssInfoData} />}
          launchIcon={
            <AntDesign
              name="infocirlceo"
              size={28}
              color={headerHeadingColor}
            />
          }
        />
        <CustomScreenModal
          modalTitle="इस पृष्ठ में भारतीय दण्ड प्रक्रिया संहिता, 1873 की धाराओं से भारतीय नागरिक सुरक्षा संहिता 2023 की नई धाराओं को खोजने की प्रक्रिया को सरल रूप में समझाया गया है।"
          modalContent={<HowToUse content={howToUseNagrikSuraksha} />}
          launchIcon={
            <AntDesign
              name="questioncircleo"
              size={28}
              color={headerHeadingColor}
            />
          }
        />
      </View>
    );
  };

  //using hook to get filtered data and to setCodeOfSectionType
  const {
    dataOfLaw,
    isCodeOfInvalidSection,
    getInputValue,
    codeOfSectionType,
    setCodeOfSectionType,
  } = useFilteredData(data || []);

  // Scroll to top whenever dataOfLaw changes (indicating a new filtered result)
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  }, [dataOfLaw]);

  return (
    <View style={styles.container}>
      <CustomHeader
        screenTitle="भारतीय नागरिक सुरक्षा संहिता, 2023"
        headerRight={headerRight}
      />
      {isCodeOfInvalidSection ? (
        <View style={styles.errorContainer}>
          <ErrorDisplay
            inputValue={isCodeOfInvalidSection}
            law="nagrikSuraksha"
            codeOfSectionType={codeOfSectionType}
          />
        </View>
      ) : (
        <FlatList
          ref={flatListRef}
          data={dataOfLaw}
          renderItem={({ item, index }) => (
            <InfoCardGroup
              upperSectionHeading="दण्ड प्रक्रिया संहिता 1873"
              downSectionHeading="भारतीय नागरिक सुरक्षा संहिता -2023"
              prevCode={item.prevCode}
              prevCodeInfo={item.prevCodeInfo}
              newCode={item.newCode}
              newCodeInfo={item.newCodeInfo}
              sectionChapter={item.chapter}
              colorIndex={index % lightBackGroundColorArr.length} // Cycle through the colors
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
    paddingHorizontal: 10,
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
