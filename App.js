import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import HeaderButtons, {
    HeaderButton,
    Item,
} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import store from './src/store';

import Home from './src/components/home/Home';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const IoniconsHeaderButton = props => (
    <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color="#52595f"
    />
);

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'League of Legends',
        headerTintColor: '#52595f',
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 16,
        },
        headerRight: (
            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item
                    title="servers"
                    iconName="md-globe"
                    onPress={() => alert('servers')}
                />
            </HeaderButtons>
        ),
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
