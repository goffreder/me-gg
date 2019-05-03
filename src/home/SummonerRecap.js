import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class SummonerRecap extends Component {
    render() {
        const icon = {
            uri: 'https://cdn.communitydragon.org/9.9.1/profile-icon/1594'
        }

        return (
            <View>
                <Text>{'goffreder'}</Text>
                <Image source={icon} style={{width: 193, height: 110}} />
                <Text>{'Level 63'}</Text>
            </View>
        );
    }
}
