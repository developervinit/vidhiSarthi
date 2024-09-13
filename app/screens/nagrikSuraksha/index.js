import { View, Text, StyleSheet } from "react-native";
import CustomHeader from "../../../components/CustomHeader.js";
import CustomScreenModal from "../../../components/modals/CustomScreenModal.js";
import { homeScreenContent } from "../../../data/screenContent.js";

export default function NagrikSuraksha() {
  const headerRight = () => {
    return (
      <View>
        <CustomScreenModal
          modalTitle="भारतीय नागरिक सुरक्षा संहिता, 2023 में नई धारा कैसे खोजें?"
          modalContent={homeScreenContent}
        />
      </View>
    );
  };

  return (
    <>
      <CustomHeader
        screenTitle="भारतीय नागरिक सुरक्षा संहिता, 2023"
        headerRight={headerRight}
      />
      <View style={styles.container}>
        <Text>
          भारतीय नागरिक संहिता, 2023 की धाराओ और संबंधित प्रावधानों को दर्शाने
          वाली तालिका भविष्य में यंहा प्रदर्शित होगी |
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
