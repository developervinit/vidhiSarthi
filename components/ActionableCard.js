import { useRouter } from "expo-router";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import Button from "./Button";
import ImageViewer from "./ImageViewer";
import {
  lawCardDescriptionFontColor,
  lawCardTitleFontColor,
  lawCardButtonColor,
  lawCardButtonFontColor,
} from "../constants/colors";

export default function ActionableCard({
  title,
  backgroundColor,
  url,
  imageUrl,
  description,
}) {
  const router = useRouter();

  function redirectTo(path) {
    router.push(`/screens/${path}`);
  }

  return (
   
    <View style={[styles.cardContainer, { backgroundColor: backgroundColor }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Pressable onPress={() => redirectTo(url)}>
        <View style={styles.imageTextWrapper}>
          <View style={styles.imageWrapper}>
            <ImageViewer imageSource={imageUrl} />
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.descripText}>{description}</Text>
          </View>
        </View>

        <Button
          onPress={() => redirectTo(url)}
          title="तालिका पर जाये"
          textSize={20}
          textWeight={800}
          buttonPadding={[10, 10]}
          buttonMargin={[10]}
          buttonColor={lawCardButtonColor}
          textColor={lawCardButtonFontColor}
          buttonRadius={5}
        />
        </Pressable>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "95%",
    maxWidth: 350,
    borderRadius: 10,
    elevation: 4,
    marginBottom: 20,
    overflow: "hidden",
  },
  scrollContent: {
    padding: 10,
  },
  imageTextWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  imageWrapper: {
    width: "30%",
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
  },
  titleWrapper: {
    width: "70%",
    padding: 10,
    paddingTop: 5,
    justifyContent: "flex-start",
  },
  titleText: {
    color: lawCardTitleFontColor,
    fontSize: 20,
    fontWeight: "700",
  },
  descripText: {
    paddingTop: 8,
    fontSize: 18,
    color: lawCardDescriptionFontColor,
  },
});
