import * as React from "react";
import { SortButtonProps } from "./sort-button.props";
import { Button } from "react-native";

const SortButton: React.FC<SortButtonProps> = props => {
  const { text, handleClick } = props;
  return <Button title={text} onPress={handleClick} />;
};

export default SortButton;
