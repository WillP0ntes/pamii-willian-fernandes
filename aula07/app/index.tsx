import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQ0UcGBUeS8u2zeN_csLD6DlTWMyKlTQA",
    authDomain: "meu-primeiro-firebase-a5018.firebaseapp.com",
    projectId: "meu-primeiro-firebase-a5018",
    storageBucket: "meu-primeiro-firebase-a5018.firebasestorage.app",
    messagingSenderId: "190291139500",
    appId: "1:190291139500:web:affef737747d355c9e3809"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const nomesCollection = firebase.firestore().collection('Nomes');
            const snapshot = await nomesCollection.get();

            const data = [];
            snapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });

            setNomes(data);
        };

        fetchData();
    }, []);

    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center '}}>
            <Text>Lista de Nomes: </Text>
            <FlatList
                data={nomes}
                keyExtractor={(item) => item.id}
                renderItem={({ item })=> (
                    <view>
                        <Text>{item.Nome} {item.Sobrenome}</Text>
                    </view>
                )}
            />
        </View>
    );
}
