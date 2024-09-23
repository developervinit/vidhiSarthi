import { View, Text, StyleSheet } from "react-native";

export default function ErrorDisplay({ inputValue, law }) {

  const lawInformation = [
    {
      lawN: "इंडियन एवीडेंस एक्ट 1872",
      range: "1 से 187"
    },
    {
      lawN: "भारतीय दण्ड संहिता, 1860",
      range: "1 से 511"
    },
    {
      lawN: "दण्ड प्रक्रिया संहिता 1873",
      range: "1 से 484"
    }
  ]

  let lawName;
  let sectionRange;

  if(law === "sakshyaAdhiniyam"){
    lawName = lawInformation[0].lawN;
    sectionRange = lawInformation[0].range
  } else if(law === "nyayaSanhita"){
    lawName = lawInformation[1].lawN;
    sectionRange = lawInformation[1].range
  } else {
    lawName = lawInformation[2].lawN;
    sectionRange = lawInformation[2].range
  }

  return (
    <View style={styles.errorCard}>
      <Text style={styles.errorMassage}>
        आपके द्वारा दर्ज की गयी धारा 
        <Text style={styles.errorTexT}> {inputValue} </Text> अमान्य है यह
        <Text style={styles.errorTexT}> {lawName} </Text>का हिस्सा नहीं है। {lawName} में धारा <Text style={styles.errorTexT}>{sectionRange}</Text> तक ही
        शामिल हैं। कृपया मान्य धारा दर्ज करें।
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorCard: {
    width: "95%",
    maxWidth: 350,
    borderRadius: 10,
    elevation: 4,
    marginBottom: 15,
    backgroundColor: "#ff5b5b",
    padding: 15,
  },
  errorMassage: {
    color: "white",
    fontSize: 22,
  },
  errorTexT: {
    color: "#591212",
    fontSize: 22,
    fontWeight: "600",
  },
});
