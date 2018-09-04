import React from 'react';
import { View, StatusBar, TextInput, StyleSheet, Animated, Easing, Dimensions, Keyboard, TouchableOpacity } from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import _ from 'lodash';

export default class CategoryTile extends React.Component {
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
        const { title, color, tasks } = this.props.item;
        const totalCount = tasks.length;
        const pendingCount = tasks.filter(item => item.completed === false).length;
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.push('TaskDetail', {
                    category: title,
                    pendingCount: pendingCount,
                    totalCount: totalCount,
                    color: color,
                    tasks: tasks,
                })}
                style={{
                    height: tileSize,
                    width: tileSize,
                    backgroundColor: 'white',
                    marginHorizontal: 20,
                    padding: 20,
                    justifyContent: 'flex-end',
                    borderRadius: 5,
                    elevation: 4
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Progress.Circle
                        size={30}
                        indeterminate={false}
                        thickness={4}
                        progress={pendingCount / totalCount}
                        color={color}
                        borderColor="#fff"
                        unfilledColor="#d6d6d6" />
                    <View style={{ marginLeft: 15 }}>
                        <Text h4 style={{ color: 'black' }}>{title}</Text>
                        <Text style={{ color: '#424242' }}>{pendingCount} of {totalCount} tasks</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const tileSize = Dimensions.get('screen').height * 0.4;

const styles = StyleSheet.create({

})