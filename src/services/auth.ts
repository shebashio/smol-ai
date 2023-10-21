import firebase from './firebase';
import { createContext } from 'react';

export const AuthContext = createContext(null);

export const login = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log('loginSuccess');
  } catch (error) {
    console.log('loginFailure', error);
  }
};

export const logout = async () => {
  try {
    await firebase.auth().signOut();
    console.log('logoutSuccess');
  } catch (error) {
    console.log('logoutFailure', error);
  }
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};