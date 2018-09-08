import React from 'react';
import { View, StatusBar, StyleSheet, FlatList, TextInput } from 'react-native';
import { Text, Icon, Button, Divider } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

import TaskItem from './components/taskItem';
class TaskDetailsScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Gaurav',
            category: props.navigation.getParam('category', null),
            color: props.navigation.getParam('color', '#636364'),
            tasks: props.navigation.getParam('tasks', []),
            isEditing: false,
        }
    }

    render() {
        const { navigation } = this.props;
        const { color, category, isEditing } = this.state;
        const pendingCount = navigation.getParam('pendingCount', null);
        const totalCount = navigation.getParam('totalCount', null);
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar
                    hidden
                    barStyle="light-content"
                    backgroundColor="#ffffff" />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    backgroundColor: '#00000020'
                }}>
                    <Icon name="keyboard-arrow-left" color="white" size={28} onPress={() => navigation.goBack()} />
                    <Icon name="more-horiz" color="white" size={28} />
                </View>
                <View style={{ paddingLeft: 50, paddingTop: 50, paddingRight: 30 }}>
                        {!isEditing && (
                            <Text style={{ fontSize: 34, fontWeight: '600', color: 'black' }} onPress={() => this.setState({ isEditing: true })}>{category}</Text>
                        )}
                        {isEditing && (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextInput
                                    autoFocus
                                    selectionColor={color}
                                    value={this.state.category}
                                    style={{ fontSize: 34, fontWeight: '600', color: 'black' }}
                                    onChangeText={(input) => this.setState({ category: input })} />
                                <Icon name="done" color={color} size={28} onPress={() => this.setState({ isEditing: false })} />                                
                            </View>
                        )}
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#424242' }}>
                        {pendingCount} of {totalCount} tasks
                    </Text>
                </View>
                <Divider style={{ backgroundColor: '#42424220', marginVertical: 10, marginLeft: 50 }} />
                <FlatList
                    data={this.state.tasks}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    style={{ alignSelf: 'flex-start', paddingLeft: 50 }}
                    renderItem={({ item }) => (
                        <TaskItem task={item} color={color} />
                    )} />
            </View>
        );
    }
}

const lightBlue = '#568cff';

const styles = StyleSheet.create({

})

export default TaskDetailsScreen;