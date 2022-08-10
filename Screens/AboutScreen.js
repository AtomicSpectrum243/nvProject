import { View, Text, Button } from 'react-native'
import React from 'react'

const AboutScreen = ({route}) => {
    // const { email } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>AboutScreen</Text>
      {/* <text>Email : {email}</text> */}
      <text>Email : {route.params.email}</text>
    </View>
  )
}

export default AboutScreen