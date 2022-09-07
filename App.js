import * as React from "react";
import { View, Text, Button, SafeAreaView,StyleSheet,Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(255,45,85)',
    background: 'rgb(242,242,242)',
    card: 'rgb(255,255,255)',
    text: 'rgb(28,28,30)',
    border: 'rgb(199,199,204)',
    notification: 'rgb(255,69,58)',
  },
};

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

      <Text>Feed Screen</Text>
      <Button title = 'Open drawer' onPress = {()=>navigation.openDrawer}/>
      <Button title = 'Toggle drawer' onPress = {()=>navigation.openDrawer}/>
    </View>
  );
}

function Notification({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Notification Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex:1}}>
        <Image
              source = {require('./assets/react_logo.png')}
              style ={styles.sideMenuProfileIcon}
         />
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close drawer" onPress={() => props.navigation.closeDrawer()} />
    </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle:{
          backgroundColor:'lightblue',
          Width:240,
        }
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
    
  );
};

export default App;

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center'
    ,
  }
  ,
})
