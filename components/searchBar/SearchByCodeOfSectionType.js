import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default SearchByCodeOfSectionType = ({
  isOptionsBoxVisible,
  setCodeOfSectionType,
  setOptionsBoxVisible,
}) => {
  return (
    <>
      {isOptionsBoxVisible ? (
        <View style={styles.SearchByOptionsContainer}>
          <TouchableOpacity
            style={styles.SearchByOptionBtn}
            onPress={() => {
              alert(
                "आपने पहला विकल्प चुना है, जिसमें पुराने धारा कोड को सर्च बॉक्स में डालकर नई धारा कोड खोजा जा सकता है।"
              );
              setCodeOfSectionType("prevCode");
              setOptionsBoxVisible((isVisible) => !isVisible);
            }}
          >
            <Text style={{ fontSize: 18 }}>
              इस विकल्प को चुनने पर, आप पुराने धारा कोड को सर्च बॉक्स में दर्ज
              कर नई धारा कोड और उसकी व्याख्या खोज सकते हैं।
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.SearchByOptionBtn, { marginBottom: 8 }]}
            onPress={() => {
              alert(
                "आपने दूसरा विकल्प चुना है, जिसमें आप सीधे नई धारा कोड को सर्च बॉक्स में दर्ज कर उसकी व्याख्या खोज सकते हैं।"
              );
              setCodeOfSectionType("newCode");
              setOptionsBoxVisible((isVisible) => !isVisible);
            }}
          >
            <Text style={{ fontSize: 18 }}>
              इस विकल्प को चुनने पर, आप सीधे नई धारा कोड को सर्च बॉक्स में दर्ज
              कर उसकी व्याख्या खोज सकते हैं।
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  SearchByOptionsContainer: {
    flex: 1,
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    gap: 8,
  },
  SearchByOptionBtn: {
    width: "100%",
    padding: 5,
    backgroundColor: "#e7e7e7",
    borderRadius: 15,
  },
});
