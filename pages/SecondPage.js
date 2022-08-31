import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import styles from "../components/style";
//import {Ionicons} from '@expo/vector-icons';

const SecondPage = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.textTopStyle}>This is Second Page</Text>
            <Button
                title="go to first page"
                onPress={() => navigation.navigate("First Page")}
            />
            <Button
                title="go to third page"
                onPress={() => navigation.navigate("Third Page")}
            />
            </View>
            <Text style={styles.textBottomSytel}>
                Thai-Nichi Institute of Technology.
            </Text>
        </View>
    );
};

export default SecondPage;