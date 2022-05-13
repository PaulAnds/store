import React from 'react';
import {StyleSheet, View, Button, Text,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'

function Box ({id, description, url, stock}){

    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <Image style = {styles.pic} source={{uri: url,}}/>
            <Text>Item #{id}</Text>
        
                <Button 
                    color = "#455a64"
                    title = "Ver"
                    onPress={
                      () => navigation.navigate('Details', {
                      id: id,
                      description: description,
                      url: url,
                      stock: stock
                    })}
                 />
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        width: '44%',
        height: 210,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        margin: 10,
    },
    pic:{
        borderRadius: 8,
        width: 150, 
        height: 150,
    }
})
export default Box;