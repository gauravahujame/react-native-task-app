import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, TabNavigator } from 'react-navigation';
import { SplashScreen } from '../screens';

export default createStackNavigator(
    {
        Splash: SplashScreen,
    },
    {
        headerMode: 'none'
    }
);
