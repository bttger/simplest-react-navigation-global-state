import React, {Component} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import GLOBALS from "../Globals";

export default class HomeScreen extends Component {
    state = {
        counter: 0,
    };

    increaseCounter = () => {
        this.setState({counter: this.state.counter + 1});
    };

    componentDidMount() {
        GLOBALS.HomeScreen = this;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 80}}>{this.state.counter}</Text>
                <Button title="INCREASE COUNTER" onPress={this.increaseCounter}/>
                <Button title="SHOW SECOND SCREEN" onPress={() => this.props.navigation.navigate("SecondScreen")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: "space-around",
    },
});
