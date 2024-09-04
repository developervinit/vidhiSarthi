import { useRouter } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Button from "./Button";
import ImageViewer from "./ImageViewer";

export default function ActionableCard({ title, url, imageUrl, description }) {
  const router = useRouter();

  function redirectTo(path) {
    router.push(`/screens/${path}`);
  }

  return (
    <View style={styles.cardContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
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
          textSize={18}
          textWeight={800}
          buttonPadding={[10, 10]}
          buttonMargin={[10]}
          buttonColor="#597874"
          textColor="white"
          buttonRadius={5}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#cce5e2",
    width: "95%",
    maxWidth: 345,
    borderRadius: 10,
    elevation: 4,
    marginBottom: 15,
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
    color: "#314542",
    fontSize: 20,
    fontWeight: "600",
  },
  descripText: {
    paddingTop: 8,
    fontSize: 18,
    color: "#4a6561",
  },
});

// backgroundColor: "#cce5e2",
//     width: "60%",
//     flexGrow: 1,
//     flexShrink: 1,
//     maxWidth: 200,
//     overflow: "auto",
//     borderRadius: 10,
//     marginBottom: 20,
//     elevation: 5,
