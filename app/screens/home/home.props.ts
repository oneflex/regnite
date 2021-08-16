export interface HomeProps {
  /**
   * The user name
   */
  name: string;
  /**
   * A callback to sign out from the app
   */
  signOut: () => void;
  /**
   * react-navigation navigation prop
   */
  navigation: any;
}
