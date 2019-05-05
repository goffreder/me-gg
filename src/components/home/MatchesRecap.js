import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { arrayOf, shape, number } from 'prop-types';

import { getSummonerLastMatches } from '../../reducers/home';

import Match from './Match';

export class MatchesRecap extends Component {
    static propTypes = {
        lastMatches: arrayOf(
            shape({
                id: number.isRequired,
                championId: number.isRequired,
                timestamp: number.isRequired,
            }),
        ).isRequired,
    };

    render() {
        return this.props.lastMatches.length ? (
            <View>
                <Text>{'Last ranked games:'}</Text>
                {this.props.lastMatches.map(m => (
                    <Match key={m.id} {...m} />
                ))}
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
