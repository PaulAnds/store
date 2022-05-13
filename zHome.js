import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles.js';

function HomeScreen({navigation}) {
    return (
        <View style ={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button 
                backgroundColor = "white"
                color="#ffeb3b"
                title="Menu"
                onPress={() => navigation.navigate("Store", {
                    id: 1,
                    description: 'This is where the description goes',
                    url: 'this is where the url goes',
                    stock: 100
                })}
            />
            
        </View>

    );
}

export default HomeScreen;