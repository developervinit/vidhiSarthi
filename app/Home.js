import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import ActionableCard from "../components/ActionableCard";
import { lightColorArr, headerHeadingColor } from "../constants/colors";
import HomeScreenModal from "../components/HomeScreenModal.js";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomHeader from "../components/CustomHeader.js";

const Home = () => {
  const headerLeft = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/images/icon.png")}
          style={{
            width: 40,
            height: 40,
            marginRight: 10,
            borderRadius: 5,
          }}
        />
      </View>
    );
  };

  const headerRight = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Link href="/screens/about">
          <AntDesign name="infocirlceo" size={28} color={headerHeadingColor} />
        </Link>
        <View style={{ marginLeft: 15 }}>
          <HomeScreenModal />
        </View>
      </View>
    );
  };

  return (
    <>
      <CustomHeader
        screenTitle="विधि सारथी"
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
              backgroundColor={lightColorArr[0]}
            />
            <ActionableCard
              title="भारतीय नागरिक सुरक्षा संहिता, 2023"
              description="भारतीय नागरिक संहिता, 2023 की धाराओ और संबंधित प्रावधानों को दर्शाने वाली तालिका"
              imageUrl={require("../assets/images/surakcha_sanhita.jpg")}
              url="nagrikSuraksha"
              backgroundColor={lightColorArr[1]}
            />
            <ActionableCard
              title="भारतीय साक्ष्य अधिनियम, 2023"
              description="भारतीय साक्ष्य अधिनियम की धाराओ और संबंधित प्रावधानों को दर्शाने वाली तालिका"
              imageUrl={require("../assets/images/sakshya_adhiniyam.png")}
              url="sakshyaAdhiniyam"
              backgroundColor={lightColorArr[2]}
            />
          </View>
        </View>
      </ScrollView>
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
