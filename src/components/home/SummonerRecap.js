import React, { Component } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { string, number } from 'prop-types';
import { connect } from 'react-redux';

import {
    fetchSummonerInfo,
    fetchSummonerLastMatches,
} from '../../actions/rest';
import {
    getSummonerName,
    getSummonerLevel,
    getSummonerIconId,
    getSummonerAccountId,
} from '../../reducers/home';

const styles = StyleSheet.create({
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
        accountId: string.isRequired,
    };

    componentDidMount() {
        this.props.fetchSummonerInfo(this.props.name);
    }

    componentDidUpdate() {
        if (this.props.accountId !== '') {
            this.props.fetchSummonerLastMatches(this.props.accountId);
        }
    }

    render() {
        const icon = {
            uri: `https://cdn.communitydragon.org/9.9.1/profile-icon/${
                this.props.iconId
            }`,
        };

        return (
            <>
                <Text style={styles.name}>{this.props.name}</Text>
                <Image source={icon} style={styles.icon} />
                <Text style={styles.level}>{`Level ${this.props.level}`}</Text>
            </>
        );
    }
}

const mapStateToProps = state => ({
    name: getSummonerName(state),
    level: getSummonerLevel(state),
    iconId: getSummonerIconId(state),
    accountId: getSummonerAccountId(state),
});

export const mapDispatchToProps = {
    fetchSummonerInfo,
    fetchSummonerLastMatches,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SummonerRecap);
