export interface SignInWithEmailProps {
  /**
   * Is auth is loading
   */
  isLoading: boolean;
  /**
   * An error string or null if there is any
   */
  error: string | null;
  /**
   * A callback to sign in the user
   */
  signIn: (email: string, password: string) => void;
  /**
   * A callback to clear any error on the redux store
   */
  clearError: () => void;
  /**
   * react-navigation navigation prop
   */
  navigation: any;
}
