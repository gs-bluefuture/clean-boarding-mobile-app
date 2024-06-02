import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import { initializeApp } from 'firebase/app';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import StackComponent from './src/routes/stack';
import { firebaseConfig } from './src/config';

initializeApp(firebaseConfig);

export default function App() {
    const [user, setUser] = useState<User | null>(null);
    const auth = getAuth();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, []);
  
  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <StackComponent user={user}/>
      <Toast />
    </>
  );
}
