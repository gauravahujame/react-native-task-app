import React from 'react';
import { View, StatusBar, TextInput, StyleSheet, Animated, Easing, Dimensions, Keyboard, TouchableOpacity } from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

export default class AddTile extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.push('CreateTaskGroup')}
                style={{
                    height: tileSize,
                    width: tileSize,
                    backgroundColor: 'white',
                    marginHorizontal: 20,
                    padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    elevation: 4 }}>
                <Icon name="add" color="#424242" size={38} />
            </TouchableOpacity>
        );
    }
}

const tileSize = Dimensions.get('screen').height * 0.4;

const styles = StyleSheet.create({

})