import React from 'react';
import {StyleSheet,View,ScrollView} from 'react-native';
import Box from './zBox'
import NavigationButtons from './zNavigationButtons';
import tasks from './data/tasks';

function StoreScreen({}) {
        
    return (
        <View style={{backgroundColor: 'purple', height: '100%'}}>
        <ScrollView style={styles.scrollView}>
              <View styles = {styles.root}>
                {
                  tasks.map((task,i) => (
                    <Box 
                      key={i}
                      url = {task.url}
                      id = {task.id}
                      description = {task.description}
                      stock = {task.stock}
                    />
                    ))
                  }
                  </View>

          </ScrollView>
          <NavigationButtons />
        </View>
    );
}

const styles = StyleSheet.create({
  root:{
    marginRight: 'auto',
    marginLeft: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',  
    backgroundColor: '#2c2e2d',
    borderRadius: 50,
    marginTop: 100,
    padding: 10,
    overflow: 'hidden',

    width: '95%',
    height: 'auto',
  },

  scrollView: {
    marginBottom: 80,
  },
  
})

export default StoreScreen;