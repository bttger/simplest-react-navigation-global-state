import React, {Component} from "react";
import {Button, StyleSheet, View} from "react-native";
import GLOBALS from "../Globals";

export default class SecondScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="RESET COUNTER" onPress={() => GLOBALS.HomeScreen.setState({counter: 0})}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:"space-around",
    },
});
