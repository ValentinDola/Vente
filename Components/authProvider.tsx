import React, {useEffect, useState, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import {WEB_CLIENT_ID} from '@env';
import {AuthContextData} from '../Constants/authTypes';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const AuthContext = React.createContext({} as AuthContextData);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}: any) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const signup = (email: string, password: string) => {
    return auth().createUserWithEmailAndPassword(email, password);
  };

  const signin = (email: string, password: string) => {
    return auth().signInWithEmailAndPassword(email, password);
  };

  const GoogleAuth = async () => {
    // return await GoogleSignin.signIn()
    //   .then(r => console.log(r))
    //   .catch(error => console.log(error));

    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(googleCredential)
      .then(r => console.log(r))
      .catch(error => console.log(error));
  };

  const logout = () => {
    return auth().signOut();
  };

  const resetPassword = (email: any) => {
    return auth().sendPasswordResetEmail(email);
  };

  const updateEmail = (email: any) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = (password: any) => {
    return currentUser.updatePassword(password);
  };

  const updateProfile = (nom: any) => {
    return currentUser.updateProfile(nom);
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
    const unsubscribe = auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signin,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateProfile,
    GoogleAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
