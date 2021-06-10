import React from "react";
import { View, Text } from "react-native";

import { COLORS, SIZES } from "../constants";

const ProgressBar = ({ containerStyle, barStyle, barPercentege }) => {
  return (
    <View style={{ ...containerStyle }}>
      <View
        style={{
          color: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
          ...barStyle,
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: barPercentege,
            marginTop: SIZES.base,
            backgroundColor: COLORS.primary,
            ...barStyle,
          }}
        ></View>
      </View>
    </View>
  );
};

export default ProgressBar;
