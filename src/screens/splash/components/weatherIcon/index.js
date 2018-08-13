import React from 'react';
import { View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

export default class WeatherIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    getWeatherIcon(weather) {
        switch(weather) {
            case 'CLOUDY':
                return 'weather-cloudy';
            case 'RAINY':
                return 'weather-rainy';
            case 'RAINY-LIGHTNING':
                return 'weather-lightning-rainy';
            case 'SUNNY':
                return 'weather-sunny';
            case 'PARTLY-CLOUDY':
                return 'weather-partlycloudy';
            case 'LIGHTNING':
                return 'weather-lightning';
            case 'SNOWY':
                return 'weather-snowy';
            case 'WINDY':
                return 'weather-windy';
        }
    }

    render() {
        const { temperature, weather, time } = this.props;
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 12 }}>{time}</Text>
                <Icon
                    name={this.getWeatherIcon(weather)}
                    type="material-community"
                    color="white" />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{temperature + '°'}</Text>
            </View>
        )
    }
}