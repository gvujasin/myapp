import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';





export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  componentDidMount() {
      return fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7e3725be5974e0ca5d444173ecd169e')
        .then((response) => response.json())
        .then((responseJson) => {
         this.setState({ dataSource: responseJson.articles,isLoading: false });
        })
        .catch((error) => {
          console.error(error);
        });
    }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =><Text>{item.author}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFC',
  },
  
});