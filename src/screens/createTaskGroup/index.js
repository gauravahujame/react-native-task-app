import React from 'react';
import { View, StatusBar, StyleSheet, TextInput, FlatList } from 'react-native';
import { Text, Icon, Divider } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';
import _ from 'lodash';

import { colors } from '../../data/colors';
import TaskItem from '../taskDetails/components/taskItem';
import CreateTaskActionSheet from './components/createTaskActionSheet';

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
        }
    }

    createTask(task) {
        const newTask = { title: task.title, time: task.time };
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask],
            isCreatingTask: false,
        }));
    }

    hideActionSheet() {
        this.setState({ isCreatingTask: false });
    }

    render() {
        const { navigation } = this.props;
        const { isCreatingTask, isEditingTitle, title } = this.state;
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
                    <TextInput
                        autoFocus
                        selectionColor={taskColor}
                        placeholder="List Name"
                        value={this.state.title}
                        style={{ fontSize: 34, fontWeight: '600', color: 'black' }}
                        onChangeText={(input) => this.setState({ title: input })} />
                </View>
                <Divider style={{ backgroundColor: '#42424220', marginVertical: 10, marginLeft: 50 }} />
                <View style={{ alignSelf: 'flex-start', paddingLeft: 50 }}>
                    {!this.state.tasks.length && (
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#00000099' }}>
                            Lets add a task to this list
                        </Text>
                    )}
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
                    floatingIcon={<Icon name="add" color="white" />}
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

const taskColor = _.sample(colors);

const styles = StyleSheet.create({

})