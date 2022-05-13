import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';
import NavigationButtons from './zNavigationButtons';

function DetailScreen({route, navigation}){

  const{id, description,url,stock} = route.params;
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#8e24aa'}}>
            <Image style = {styles.pic} source={{uri: url,}}/>
        <View style={styles.containerView}> 
            <Text style = {styles.containerText}>Item #{id}</Text>
            <Text style = {styles.containerText}> : {description}</Text>
            <Text style = {styles.containerText}> Stock: {stock}</Text>
        </View>
          <NavigationButtons />
        </View>
    );
}

export default DetailScreen;