import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: { backgroundColor: '#FF33DE' },
          headerTintColor: '#ffff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen name='First Page' component={FirstPage} />
        <Stack.Screen name='Second Page' component={SecondPage} />
        <Stack.Screen name='Third Page' component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// function HomeScreen({ navigation, route }) {

//   React.useEffect(() => {
//     if (route.params?.post) {
//       //Post updated,do somethin with 'route.params.post'
//       //For example, sent the post to the server      
//     }
//   }, [route.params?.post]);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button 
//         title='GO TO SECOND PAGE'
//         onPress={() => navigation.navigate('CreatePost')}
//         />
//         <Button
//         title1='GO TO THIRD PAGE'
//         onPress={() => navigation.navigate('CreatePost')}
//       />
//       <Text style={{ margin: 10 }}>Thai-Nichi Institute of Technology</Text>
//     </View>
//   );
// }

// function CreatePostScreen({ navigation, route }) {

//   const [postText, setPostText] = React.useState('');

//   return (
//     // use Fragment
//     <>
//       <TextInput
//         multiline
//         placeholder='Plese text here'
//         style={{ height: 200, padding: 10, backgroundColor: 'white' }}
//         onChangeText={setPostText}
//         value={postText}
//       />
//       <Button
//         title='Click'
//         onPress={() => {
//           //Pass params back to HomeScreen funchion
//           navigation.navigate('Home', { post: postText })
//         }}
//       />
//     </>

//   );
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName='Home'
//         screenOptions={{
//           headerStyle: { backgroundColor: 'green' },
//           headerTintColor: '#ffff',
//           headerTitleStyle: { fontWeight: 'bold' }
//         }}
//       >
//         <Stack.Screen name='First Page' component={HomeScreen} />
//         <Stack.Screen name='CreatePost' component={CreatePostScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }