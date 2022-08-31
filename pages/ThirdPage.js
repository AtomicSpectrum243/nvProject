import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import styles from "../components/style";
//import {Ionicons} from '@expo/vector-icons';

const ThirdPage = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.textTopStyle}>This is Third Page</Text>
            <Button
                title="go to first page"
                onPress={() => navigation.navigate("First Page")}
            />
            <Button
                title="go to second page"
                onPress={() => navigation.navigate("Second Page")}
            />
            </View>
            <Text style={styles.textBottomSytel}>
                Thai-Nichi Institute of Technology
            </Text>
        </View>
    );
};

export default ThirdPage;