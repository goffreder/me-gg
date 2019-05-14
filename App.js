import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './src/store';

import Home from './src/components/home/Home';

import RegionPicker from './src/components/RegionPicker';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'League of Legends',
        headerTintColor: '#52595f',
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 16,
        },
        headerRight: <RegionPicker />,
    };

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Home />
                </View>
            </Provider>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
    },
    { headerLayoutPreset: 'center' },
);

export default createAppContainer(AppNavigator);
