import React from "react"
import { View, ViewStyle, Text, TextStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { color, spacing, typography } from "../../theme"

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  paddingHorizontal: spacing[4]
}

const TEXT: TextStyle = {
  color: color.palette.orange,
  fontFamily: typography.primary
}

export function MainScreen() {
  const navigation = useNavigation()

  return (
    <View style={FULL}>
      <View style={CONTAINER}>
        <Text style={TEXT}>Hello World!</Text>
      </View>
    </View>
  )
};