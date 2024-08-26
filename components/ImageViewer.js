import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ imageSource }) {
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginBottom: 2,
  },
});
