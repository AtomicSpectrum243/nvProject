import * as React from "react";
import { Button, View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";

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
      <Button title = 'Toggle drawer' onPress = {()=>navigation.toggleDrawer}/>
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
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close drawer" onPress={() => props.navigation.closeDrawer()} />
      <DrawerItem label="Toggle drawer" onPress={() => props.navigation.closeToggle()} />
    </DrawerContentScrollView>
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
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
    
  );
}
