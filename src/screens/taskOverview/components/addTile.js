import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

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
                    marginVertical: 5,
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