import * as React from "react";
import { CheckboxProps } from "./Checkbox.props";
import { View, ViewStyle } from "react-native";
import { color } from "../../theme";
import Svg, { Circle, Path } from "react-native-svg";

const CONTAINER: ViewStyle = {};

function Checkbox(props: CheckboxProps) {
  const style = {
    background: props.isChecked ? "#D4DBFA" : color.transparent,
    border: props.isChecked ? "#D4DBFA" : "rgba(199, 78, 221, 1)",
    checkMark: props.isChecked ? "white" : color.transparent,
  };

  return (
    <View style={CONTAINER}>
      <Svg
        width={props.size}
        height={props.size}
        viewBox="0 0 27 27"
        fill="none"
      >
        <Circle
          cx="13.5"
          cy="13.5"
          r="12.5"
          fill={style.background}
          stroke={style.border}
          strokeWidth="2"
        />
        <Path
          d="M11.779 17.0226C11.5837 17.2177 11.2672 17.2176 11.072 17.0224L8.47647 14.4269C8.2817 14.2321 7.96608 14.2316 7.77062 14.4256L7.35606 14.8373C7.15962 15.0323 7.15905 15.3499 7.3548 15.5456L11.0719 19.2627C11.2671 19.458 11.5837 19.458 11.779 19.2627L20.5719 10.4698C20.7671 10.2745 20.7671 9.95796 20.5719 9.7627L20.1626 9.35339C19.9674 9.15819 19.6509 9.15811 19.4556 9.35322L11.779 17.0226Z"
          fill={style.checkMark}
        />
      </Svg>
    </View>
  );
}

export default Checkbox;
