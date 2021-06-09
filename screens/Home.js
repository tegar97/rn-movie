import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
} from "react-native";
import { dummyData, COLORS, SIZES, FONTS, icons, images } from "./../constants";

const Home = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
          }}
          onPress={() => console.log("profile")}
        >
          <Image
            source={images.profile_photo}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
          }}
          onPress={() => console.log("Screen Mirror")}
        >
          <Image
            source={icons.airplay}
            style={{ width: 25, height: 25, tintColor: COLORS.primary }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      {renderHeader()}
    </SafeAreaView>
  );
};

export default Home;
