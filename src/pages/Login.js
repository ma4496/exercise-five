import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function CreateUser({ setLoggedIn, setUserInformation }) {
  const signUpUser = useCallback(
    (e) => {
      e.preventDefault();
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;

      console.log({ email, password });

      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then((UserCredential) => {
          const user = UserCredential.user;
          setLoggedIn(true);
          setUserInformation({
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken,
          });
          console.log({ user });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
        });
    },
    [setLoggedIn, setUserInformation]
  );

  function Login() {
    return <div></div>;
  }
}

export default Login;
