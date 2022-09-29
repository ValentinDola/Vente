import React, {useEffect, useState, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import {AuthContextData} from '../Constants/authTypes';

const AuthContext = React.createContext({} as AuthContextData);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}: any) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const signup = (email: string, password: string) => {
    return auth().createUserWithEmailAndPassword(email, password);
  };

  const signin = (email: string, password: string) => {
    return auth().signInWithEmailAndPassword(email, password);
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
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
