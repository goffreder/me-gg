import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { string, number, shape } from 'prop-types';

import { getSummonerId, getSummonerRankedInfo } from '../../reducers/home';
import { fetchSummonerRankedInfo } from '../../actions/rest';

class RankedRecap extends Component {
    static propTypes = {
        id: string,
        ranked: shape({
            rank: string.isRequired,
            tier: string.isRequired,
            lp: number.isRequired,
            wins: number.isRequired,
            losses: number.isRequired,
        }),
    };

    static defaultProps = {
        id: '',
    };

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.props.fetchSummonerRankedInfo(this.props.id);
        }
    }

    render() {
        const {
            ranked: { rank, tier, lp, wins, losses },
        } = this.props;

        return <Text>{`${tier} ${rank} ${lp} LP / ${wins}W ${losses}L`}</Text>;
    }
}

const mapStateToProps = state => ({
    id: getSummonerId(state),
    ranked: getSummonerRankedInfo(state),
});

export const mapDispatchToProps = {
    fetchSummonerRankedInfo,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RankedRecap);
