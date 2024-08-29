// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const AskForWorker = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Text style={styles.headertxt}> Ask For Worker</Text>

  
     
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertxt: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
});

export default AskForWorker;
