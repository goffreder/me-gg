import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { array } from 'prop-types';

import { getSummonerLastMatches } from '../modules/reducer';

export class MatchesRecap extends Component {
    static propTypes = {
        lastMatches: array.isRequired,
    };

    render() {
        return this.props.lastMatches.count ? (
            <View>
                <Text>{'Last summoner matches'}</Text>
            </View>
        ) : (
            <View>
                <Text>{'No matches found'}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    lastMatches: getSummonerLastMatches(state),
});

export const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MatchesRecap);
