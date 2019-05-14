import React, { Component } from 'react';
import { Picker } from 'react-native';

import { regions } from '../constants';

export default class RegionPicker extends Component {
    render() {
        return (
            <Picker
                selectedValue={'java'}
                style={{ height: 50, width: 100 }}
                onValueChange={value => alert(value)}
                mode="dropdown"
            >
                {Object.keys(regions).map(r => (
                    <Picker.Item key={r} label={regions[r]} value={r} />
                ))}
            </Picker>
        );
    }
}
