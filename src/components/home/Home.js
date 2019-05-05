import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import SummonerRecap from './SummonerRecap';
import MatchesRecap from './MatchesRecap';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
    },
});

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SummonerRecap />
                <MatchesRecap />
            </View>
        );
    }
}
