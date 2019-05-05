import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import SummonerRecap from './SummonerRecap';
import RankedRecap from './RankedRecap';
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
                <RankedRecap />
                <MatchesRecap />
            </View>
        );
    }
}
