import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { string, number } from 'prop-types';
import { connect } from 'react-redux';

import { fetchSummonerInfo } from '../../rest/actions';
import {
    getSummonerName,
    getSummonerLevel,
    getSummonerIconId,
} from '../modules/reducer';

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
            <View>
                <Text>{this.props.name}</Text>
                <Image source={icon} style={{ width: 193, height: 110 }} />
                <Text>{`Level ${this.props.level}`}</Text>
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
