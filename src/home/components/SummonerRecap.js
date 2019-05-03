import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { string, number } from 'prop-types';
import { connect } from 'react-redux';

import { fetchSummonerInfo } from '../../rest/actions';
import {
    getSummonerName,
    getSummonerLevel,
    getSummonerIconId,
} from '../modules/reducer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
    },
    icon: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    name: {
        fontSize: 36,
    },
    level: {
        fontSize: 24,
    },
});

export class SummonerRecap extends Component {
    static propTypes = {
        name: string.isRequired,
        iconId: number.isRequired,
        level: number.isRequired,
    };

    componentDidMount() {
        this.props.fetchSummonerInfo(this.props.name);
    }

    render() {
        const icon = {
            uri: `https://cdn.communitydragon.org/9.9.1/profile-icon/${
                this.props.iconId
            }`,
        };

        return (
            <View style={styles.container}>
                <Text style={styles.name}>{this.props.name}</Text>
                <Image source={icon} style={styles.icon} />
                <Text style={styles.level}>{`Level ${this.props.level}`}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    name: getSummonerName(state),
    level: getSummonerLevel(state),
    iconId: getSummonerIconId(state),
});

export const mapDispatchToProps = {
    fetchSummonerInfo,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SummonerRecap);
