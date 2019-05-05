import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { number } from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});

export default class Match extends Component {
    static propTypes = {
        id: number.isRequired,
        championId: number.isRequired,
        timestamp: number.isRequired,
    };

    render() {
        const icon = {
            uri: `https://cdn.communitydragon.org/9.9.1/champion/${
                this.props.championId
            }/square`,
        };

        return (
            <View>
                <Image source={icon} style={styles.icon} />
                <Text>{`${distanceInWordsToNow(
                    new Date(this.props.timestamp),
                )} ago`}</Text>
            </View>
        );
    }
}
