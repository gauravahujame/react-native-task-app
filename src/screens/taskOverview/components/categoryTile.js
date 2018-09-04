import React from 'react';
import { View, StatusBar, TextInput, StyleSheet, Animated, Easing, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Text, Icon, Button, Divider } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import _ from 'lodash';

import TaskItemSmall from '../components/taskItemSmall';
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
        const pendingTasks = tasks.filter(item => item.completed === false);
        const pendingCount = pendingTasks.length;
        return (
            <View>
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
                <Text style={{ fontSize: 14, fontWeight: '500', color: 'white', paddingTop: 10, paddingBottom: 5, paddingLeft: 80 }}>Due Today</Text>
                <Divider style={{ backgroundColor: '#42424220', marginLeft: 80, marginRight: 20, marginBottom: 10, height: 2 }} />
                <FlatList
                    data={pendingTasks}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    style={{ alignSelf: 'flex-start', paddingLeft: 40 }}
                    renderItem={({ item }) => (
                        <TaskItemSmall task={item} color={color} />
                    )} />
            </View>
        );
    }
}

const tileSize = Dimensions.get('screen').height * 0.4;

const styles = StyleSheet.create({

})