import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import OptionModal from "../modals/OptionModal";
import { contentColor } from "../../constants/colors.js";

export default SearchByCodeOfSectionType = ({
  setCodeOfSectionType,
  toggleOptionsBoxFn,
}) => {
  // State to control the modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // Function to handle option selection and show the modal
  const handleOptionSelect = (codeType, content) => {
    setCodeOfSectionType(codeType);
    toggleOptionsBoxFn();
    setModalContent(content); // Set the content for the modal
    setModalVisible(true); // Show the modal
  };

  return (
    <>
      <View style={styles.SearchByOptionsContainer}>
        <TouchableOpacity
          style={styles.SearchByOptionBtn}
          onPress={() =>
            handleOptionSelect(
              "prevCode",
              "आपने पहला विकल्प चुना है, जिसमें पुराने धारा कोड को सर्च बॉक्स में दर्ज कर, उसके स्थान पर अधिसूचित नई धारा कोड एवं उसकी विस्तृत व्याख्या प्राप्त कर सकते हैं।"
            )
          }
        >
          <Text style={styles.SearchByOptionContent}>
            इस विकल्प को चुनने पर, आप पुराने धारा कोड को सर्च बॉक्स में दर्ज कर,
            उसके स्थान पर अधिसूचित नई धारा कोड एवं उसकी विस्तृत व्याख्या प्राप्त
            कर सकते हैं।
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.SearchByOptionBtn, { marginBottom: 8 }]}
          onPress={() =>
            handleOptionSelect(
              "newCode",
              "आपने दूसरा विकल्प चुना है, जिसमें आप सीधे नई धारा कोड को सर्च बॉक्स में दर्ज कर उसकी विस्तृत व्याख्या प्राप्त कर सकते हैं।"
            )
          }
        >
          <Text style={styles.SearchByOptionContent}>
            इस विकल्प को चुनने पर, आप सीधे नई धारा कोड को सर्च बॉक्स में दर्ज कर
            उसकी विस्तृत व्याख्या प्राप्त कर सकते हैं।
          </Text>
        </TouchableOpacity>
      </View>
      {/* Pass the modal visibility and content as props */}
      <OptionModal
        visible={modalVisible}
        setVisible={setModalVisible}
        content={modalContent}
      />
    </>
  );
};

const styles = StyleSheet.create({
  SearchByOptionsContainer: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    gap: 8,
    padding: 10,
    borderRadius: 8,
  },
  SearchByOptionBtn: {
    width: "100%",
    padding: 10,
    backgroundColor: "#e7e7e7",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#616060",
  },
  SearchByOptionContent: {
    fontSize: 20,
    color: "#636262",
  },
});
