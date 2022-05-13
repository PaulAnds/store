import React from 'react';
import {Button, View,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'

function zNavigationButtons(){

    const navigation = useNavigation();
        return (
                <View style = {styles.root}>
          <Button
                color= "#ffeb3b"
                title= "Back"
                onPress={() => navigation.goBack()}
              />
          <Button
                color= "#ffeb3b"
                title= "Home"
                onPress={() => navigation.popToTop()}
              />
          </View>
        );
}

const styles = StyleSheet.create({
    root:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#8e24aa',

    padding: 5,
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    }
})
export default zNavigationButtons;