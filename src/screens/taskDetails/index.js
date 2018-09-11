import React from 'react';
import { View, StatusBar, StyleSheet, FlatList, TextInput } from 'react-native';
import { Text, Icon, Divider } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';
import { inject, observer } from 'mobx-react/native';


import TaskItem from './components/taskItem';
import CreateTaskActionSheet from '../../components/createTaskActionSheet';

@inject('listStore') @observer
class TaskDetailsScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.hideActionSheet = this.hideActionSheet.bind(this);
        this.createTask = this.createTask.bind(this);
        this.list = props.navigation.getParam('list');
        this.state = {
            title: this.list.title,
            isEditing: false,
            isCreatingTask: false,
        }
    }

    createTask(task) {
        this.list.addTask({ title: task.title, time: task.time, completed: false });
        this.setState({ isCreatingTask: false });
    }

    renameList() {
        this.list.setTitle(this.state.title);
        this.setState({ isEditing: false });
    }

    hideActionSheet() {
        if (this.state.isCreatingTask) {
            this.setState({ isCreatingTask: false });
        }
    }

    render() {
        const { navigation } = this.props;
        const { color } = this.list;

        const { isEditing, isCreatingTask, title } = this.state;
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
                        <Text style={{ fontSize: 34, fontWeight: '600', color: 'black' }} onPress={() => this.setState({ isEditing: true })}>{title}</Text>
                    )}
                    {isEditing && (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput
                                autoFocus
                                selectionColor={color}
                                value={title}
                                style={{ flex: 1, fontSize: 34, fontWeight: '600', color: 'black' }}
                                onChangeText={(input) => this.setState({ title: input })} />
                            <Icon name="done" color={color} size={28} onPress={() => this.renameList()} />
                        </View>
                    )}
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#424242' }}>
                        {pendingCount} of {totalCount} tasks
                    </Text>
                </View>
                <Divider style={{ backgroundColor: '#42424220', marginVertical: 10, marginLeft: 50 }} />
                <FlatList
                    data={this.list.tasks}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    style={{ alignSelf: 'flex-start', paddingLeft: 50 }}
                    renderItem={({ item }) => (
                        <TaskItem task={item} color={color} />
                    )} />
                <FloatingAction
                    color={color}
                    showBackground={false}
                    visible={!isCreatingTask}
                    listenKeyboard
                    position="center"
                    floatingIcon={<Icon name="plus" type="feather" color="white" />}
                    onPressMain={() => this.setState({ isCreatingTask: !isCreatingTask })}
                />
                {isCreatingTask && (
                    <CreateTaskActionSheet
                        hideActionSheet={this.hideActionSheet}
                        createTask={this.createTask}
                        taskColor={color} />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({

})

export default TaskDetailsScreen;