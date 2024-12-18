import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import ActionableCard from "../components/ActionableCard";
import {
  lightBackGroundColorArr,
  headerHeadingColor,
} from "../constants/colors";
import CustomScreenModal from "../components/modals/CustomScreenModal.js";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomHeader from "../components/CustomHeader.js";
import HowToUse from "../components/HowToUse.js";
import { howToUseHomeScreenData } from "../data/homeScreen/howToUse.js";

const Home = () => {
  const router = useRouter();

  const headerLeft = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/images/header_logo.png")}
          style={{
            width: 125,
            height: 50,
          }}
        />
      </View>
    );
  };

  const headerRight = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 10,
        }}
      >
        <TouchableOpacity onPressIn={() => router.push("/screens/about")}>
          <AntDesign name="infocirlceo" size={28} color={headerHeadingColor} />
        </TouchableOpacity>
        <View>
          <CustomScreenModal
            modalTitle="होम स्क्रीन का उपयोग कैसे करें?"
            modalContent={<HowToUse content={howToUseHomeScreenData} />}
            launchIcon={
              <AntDesign
                name="questioncircleo"
                size={28}
                color={headerHeadingColor}
              />
            }
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <CustomHeader
        screenTitle=""
        headerLeft={headerLeft}
        headerRight={headerRight}
      />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerHome}>
            <ActionableCard
              title="भारतीय न्याय संहिता, 2023"
              description="भारतीय दण्ड संहिता, 1860 की धाराओ और भारतीय न्याय संहिता, 2023 के संबंधित प्रावधानों को दर्शाने वाली तालिका"
              imageUrl={require("../assets/images/nyaye_sanhita.png")}
              url="bhartiyaNyayaSanhita"
              backgroundColor={lightBackGroundColorArr[0]}
            />
            <ActionableCard
              title="भारतीय नागरिक सुरक्षा संहिता, 2023"
              description="भारतीय नागरिक संहिता, 2023 की धाराओ और संबंधित प्रावधानों को दर्शाने वाली तालिका"
              imageUrl={require("../assets/images/surakcha_sanhita.png")}
              url="nagrikSuraksha"
              backgroundColor={lightBackGroundColorArr[1]}
            />
            <ActionableCard
              title="भारतीय साक्ष्य अधिनियम, 2023"
              description="भारतीय साक्ष्य अधिनियम की धाराओ और संबंधित प्रावधानों को दर्शाने वाली तालिका"
              imageUrl={require("../assets/images/sakshya_adhiniyam.png")}
              url="sakshyaAdhiniyam"
              backgroundColor={lightBackGroundColorArr[2]}
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Centers children horizontally
    overflow: "hidden",
    paddingBottom: 20,
  },

  containerHome: {
    marginTop: 30,
  },
});

export default Home;
