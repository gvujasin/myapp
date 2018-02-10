'use strict'

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';


export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  componentDidMount() {
      return fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e7e3725be5974e0ca5d444173ecd169e')
        .then((response) => response.json())
        .then((responseJson) => {
         this.setState({ dataSource: responseJson.articles,isLoading: false });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  renderItem ({item}) {
    const { author, title, description, urlToImage } = item;
    return ( 
    <View style={styles.wrapper}>
    <View style={styles.itemContainer}>
    
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    </View>
     <View style={styles.imageContainer}>
    
      <Image style={styles.image} source={{uri: urlToImage}}/>
     </View>
    
    </View>
   );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          
          
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  container: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    backgroundColor: '#F5FCFC',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  author : {
    fontSize: 18,
    color: 'blue',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    fontFamily: 'Helvetica',
  },
  title : {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4'
  },
  description : {
    fontSize: 10,
    marginTop: 15,
    padding: 5,
    fontFamily: 'Kailasa',
    flex: 1,
    flexDirection: 'column',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  image: {
    height: 150,
    width: 150,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
    margin: 5,
  }
  
});