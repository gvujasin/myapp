import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={[{name:'bob'}, {name: 'tim'}]}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <Text>{item.name}</Text>}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
