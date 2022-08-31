import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import styles from "../components/style";
//import {Ionicons} from '@expo/vector-icons';

const FirstPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.textTopStyle}>This is the First Page</Text>
            <Button
                title="go to second page"
                onPress={() => navigation.navigate("Second Page")}
            />
            <Button
                title="go to third page"
                onPress={() => navigation.navigate("Third Page")}
            />
            </View>
            <Text style={styles.textBottomSytel}>
                Thai-Nichi Institute of Technology
            </Text>
        </View>
    );
};
  
export default FirstPage;