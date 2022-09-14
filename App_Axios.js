import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = () => {

  const getDataUsingaxios = async ()=>{
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      alert(JSON.stringify(response.data));
    } catch (error) {
      alert(error.messgae);
    }
  };

  return (
    <View style = {StyleSheet.container}>
      <Text style = {{ fontSize: 20, textAlign: 'center' }}>
        Example of axios in React Native
        </Text>
      <TouchableOpacity
      style = {StyleSheet.buttonStyle}
      onPress = {getDataUsingaxios}
      >
      <Text>Get Data Using axios get</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App