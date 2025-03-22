import firebase from 'firebase/compat/app';
import 'firerbase/compat/firebase'; 

const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId: ,
  storageBuket: ,
  messagingSenderId: ,
  appId: ,
}


firebase.initializeApp(firebaseConfig);

import React, {useEffect,useState} from 'react';
import {View, Text, Flatlist} from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomeCollection = firebase.firestone().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) = >{
        data.push({ id: document.dir, ...doc.data() });
      });

      setNomes(data)
    };

    fetchData();
  }, [])
}