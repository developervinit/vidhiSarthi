import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ imageSource }) {
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    borderRadius: 20,
    marginBottom: 2,
  },
});
