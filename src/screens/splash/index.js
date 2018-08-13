import React from 'react';
import { View, StatusBar, TextInput, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';


export default class SplashScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            circleCenter: new Animated.Value(-circleSize),
        }
    }

    componentDidMount() {
        Animated.timing(this.state.circleCenter, {
            toValue: -circleSize / 2,
            easing: Easing.elastic(1.3),
            duration: 2000,
        }).start();
    }

    onLogin() {
        if (this.state.username && this.state.password) {
            this.props.navigation.push('Home');
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <LinearGradient
                colors={[indigoBrightColor, indigoColor]}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <StatusBar
                    hidden
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.30)" />
                <Animated.View style={{ ...styles.circleBigTop, top: -circleSize / 2, left: this.state.circleCenter }}>
                    <View style={styles.circleSmallTop} />
                </Animated.View>
                <Animated.View style={{ ...styles.circleBigBottom, bottom: -circleSize / 2, right: this.state.circleCenter }}>
                    <View style={styles.circleSmallBottom} />
                </Animated.View>
                <Text style={{ fontSize: 20, fontWeight: '400', color: 'white', letterSpacing: 3 }}>
                    <Text>re</Text>
                    <Text style={{ fontWeight: '700' }}>awake</Text>
                    <Text>ning</Text>
                </Text>
            </LinearGradient>
        );
    }
}

const circleSize = Dimensions.get('screen').width * 1.6;

const indigoBrightColor = '#4130ff';
const indigoColor = '#223b9b';

const purpleBrightColor = '#3807b350';
const purpleColor = '#a311f1';

const pinkBrightColor = '#ff19badd';
const pinkColor = '#dc0ee6';

const styles = StyleSheet.create({
    circleSmallTop: {
        height: circleSize / 2,
        width: circleSize / 2,
        borderRadius: circleSize / 4,
        backgroundColor: pinkBrightColor,
    },
    circleBigTop: {
        position: 'absolute',
        // top: -circleSize / 2,
        // left: -circleSize / 2,
        height: circleSize,
        width: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: purpleBrightColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleSmallBottom: {
        height: circleSize / 2,
        width: circleSize / 2,
        borderRadius: circleSize / 4,
        backgroundColor: pinkBrightColor,
    },
    circleBigBottom: {
        position: 'absolute',
        // bottom: -circleSize / 2,
        // right: -circleSize / 2,
        height: circleSize,
        width: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: purpleBrightColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
})