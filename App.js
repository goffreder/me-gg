import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SummonerRecap from './src/home/SummonerRecap';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SummonerRecap />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
