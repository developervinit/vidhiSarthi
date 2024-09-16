import { View, Text, StyleSheet, Image } from "react-native";
import { howToUseNyayaSanhitaData } from "../../../data/screenContent/";

export default function BnsHowToComponent() {
  return (
    <>
      {howToUseNyayaSanhitaData.map((item) => {
        return (
          <View style={styles.BnsHowToContainer} key={item.id}>
            <Text style={styles.BnsHowToTitle}>
              {item.id}. {item.title}
            </Text>
            <Text style={styles.BnsHowToContent}>{item.content}</Text>
            <View style={styles.sanhitaModalCardImageContainer}>
              <Image style={styles.sanhitaModalCardImage} source={item.imgUr} />
            </View>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  BnsHowToContainer: {
    width: "100%",
  },
  BnsHowToTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#3d3d3d",
  },
  BnsHowToContent: {
    fontSize: 18,
    color: "#636262",
  },
  sanhitaModalCardImageContainer: {
    width: "100%",
    alignItems: "center", // Center the image container horizontally
    marginVertical: 10, // Adjust the gap above and below the image
  },
  sanhitaModalCardImage: {
    width: "100%", // Set image width as per requirement
    height: undefined, // Let React Native calculate the height automatically
    aspectRatio: 1, // Maintains the aspect ratio
    resizeMode: "contain", // Ensure the image scales properly within the view
  },
});
