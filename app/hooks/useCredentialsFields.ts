import { useEffect, useState, useCallback } from "react";
import { validateEmail, validatePassword } from "../utils/validate";
import { debounce } from "debounce";
import { timing } from "../theme";

export function useCredentialsFields() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  useEffect(() => {
    updateEmailIsValid(email);
  }, [email]);

  const updateEmailIsValid = useCallback(
    debounce(
      (email: string) => setEmailIsValid(!email || validateEmail(email)),
      emailIsValid ? timing.long : timing.quick,
    ),
    [emailIsValid],
  );

  useEffect(() => {
    setPasswordIsValid(validatePassword(password));
  }, [password]);

  return {
    email: {
      value: email,
      update: setEmail,
      isValid: emailIsValid,
    },
    password: {
      value: password,
      update: setPassword,
      isValid: passwordIsValid,
    },
  };
}
