import { Text, View, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

const Home = () => {
  return (
    <View>
    <Stack.Screen
      options={{
        headerTitle: "Hello",
      }}
    />
    <View>
      <Text>This is from Home</Text>
      <Link href="/screens/BhartiyaNyayaSanhita">भारतीय न्याय संहिता, 2023</Link> 
    </View>
    </View>
  );
};

export default Home;
