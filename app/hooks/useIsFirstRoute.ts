import { useNavigation, useRoute } from "@react-navigation/core";

export function useIsFirstRoute() {
  const navigation = useNavigation();
  const route = useRoute();

  return navigation.dangerouslyGetState().routes[0].key === route.key;
}
