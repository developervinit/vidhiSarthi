import { Text, View, Image, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Button from "../components/Button";
import ActionableCard from "../components/ActionableCard";
import GradientHeader from "../components/GradientHeader";

const Home = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "विधि सारथी",
          headerBackground: () => <GradientHeader />,

          headerTitleStyle: {
            fontWeight: "bold",
            color: "black",
          },
          headerLeft: () => (
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
          ),
        }}
      />
      <View style={styles.container}>
        <View style={styles.containerHome}>
          <ActionableCard
            title="भारतीय न्याय संहिता, 2023"
            image="This is first card image"
            url="BhartiyaNyayaSanhita"
          />
          <ActionableCard
            title="भारतीय न्याय संहिता, 2023"
            image="This is second card image"
            url="BhartiyaNyayaSanhita"
          />
          <ActionableCard
            title="भारतीय न्याय संहिता, 2023"
            image="This is third card image"
            url="BhartiyaNyayaSanhita"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Centers children horizontally
  },

  containerHome: {
    marginTop: 50,
  },
});

export default Home;
