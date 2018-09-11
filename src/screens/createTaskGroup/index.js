import React from 'react';
import { View, StatusBar, StyleSheet, TextInput, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import { Text, Icon, Divider } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';
import { inject, observer } from 'mobx-react/native';
import _ from 'lodash';

import { colors } from '../../data/colors';
import TaskItem from '../taskDetails/components/taskItem';
import CreateTaskActionSheet from './components/createTaskActionSheet';

// add text shadow under title
@inject('listStore', 'appStore') @observer
export default class CreateTaskGroupScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.hideActionSheet = this.hideActionSheet.bind(this);
        this.createTask = this.createTask.bind(this);
        this.state = {
            title: null,
            isCreatingTask: true,
            tasks: [],
            isEditingTitle: true,
            taskColor: _.sample(colors),
        }
    }

    componentDidMount() {
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.hideActionSheet);
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove();
    }

    createTask(task) {
        const newTask = { title: task.title, time: task.time, completed: false };
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask],
            isCreatingTask: false,
        }));
    }

    saveList() {
        this.props.listStore.addList({ title: this.state.title, color: this.state.taskColor, tasks: this.state.tasks });
        this.props.navigation.goBack();
    }

    hideActionSheet() {
        if (this.state.isCreatingTask) {
            this.setState({ isCreatingTask: false });
        }
    }

    changeTaskColor() {
        const color = _.sample(colors);
        this.setState({ taskColor: color });
    }

    render() {
        const { navigation } = this.props;
        const { isCreatingTask, isEditingTitle, title, taskColor } = this.state;
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
                    <Icon name="done" color={taskColor} size={28} onPress={() => this.saveList()} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 50, paddingTop: 50, paddingRight: 30 }}>
                    <TouchableOpacity
                        style={{ height: 35, width: 35, margin: 10, borderRadius: 20, backgroundColor: taskColor }}
                        onPress={() => this.changeTaskColor()} />
                    <TextInput
                        autoFocus
                        selectionColor={taskColor}
                        placeholder="List Name"
                        value={this.state.title}
                        style={{ flex: 1, fontSize: 34, fontWeight: '600', color: 'black' }}
                        onChangeText={(input) => this.setState({ title: input })} />
                </View>
                <Divider style={{ height: 2, backgroundColor: '#42424220', marginVertical: 10, marginLeft: 50 }} />
                {!this.state.tasks.length && !isCreatingTask && (
                    <View style={{ paddingTop: 35, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: '#00000099' }}>
                            Let's start with adding a note
                        </Text>
                    </View>
                )}
                <View style={{ alignSelf: 'flex-start', paddingLeft: 50 }}>
                    {this.state.tasks.length > 0 && (
                        <FlatList
                            data={this.state.tasks}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            extraData={this.state.tasks}
                            renderItem={({ item }) => (
                                <TaskItem task={item} color={taskColor} />
                            )} />
                    )}
                </View>

                <FloatingAction
                    color={taskColor}
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
                        taskColor={taskColor} />
                )}
            </View>
        );
    }
}


const styles = StyleSheet.create({

})