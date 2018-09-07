import React from 'react';
import { View, Picker, TextInput } from 'react-native';
import { Text, Icon, Button, Divider } from 'react-native-elements';

export default class CreateTaskActionSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: undefined,
            date: undefined,
            time: undefined,
            repeat: false,
        }
    }

    validateTask() {
        const { title, date, time, repeat } = this.state;
        if (title && date && time) return true;
        return false;
    }

    render() {
        const { title, date, time, repeat } = this.state;
        const { hideActionSheet, createTask, taskColor } = this.props;
        return (
            <View style={{ width: '100%', elevation: 0, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#42424202' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={{ fontSize: 16, color: '#424242' }}>Add Task</Text>
                    <Icon name="close" onPress={() => hideActionSheet()} containerStyle={{ paddingHorizontal: 10 }} />
                </View>
                <Divider style={{ backgroundColor: '#42424210' }} />
                <TextInput
                    placeholder="Describe task"
                    autoFocus
                    value={title}
                    style={{ fontSize: 16, fontWeight: '600', color: 'black' }}
                    onChangeText={(input) => this.setState({ title: input })} />
                <Picker
                    selectedValue={date}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => this.setState({ date: itemValue })}>
                    <Picker.Item label="Today" value="today" />
                    <Picker.Item label="Tomorrow" value="tomorrow" />
                    <Picker.Item label="Next Friday" value="next-week" />
                    <Picker.Item label="Pick a date" value="custom" />
                </Picker>
                <Picker
                    selectedValue={time}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => this.setState({ time: itemValue })}>
                    <Picker.Item label="Evening 6:00 PM" value="evening" />
                    <Picker.Item label="Night 8:00PM" value="night" />
                </Picker>
                <Picker
                    selectedValue={repeat}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => this.setState({ repeat: itemValue })}>
                    <Picker.Item label="Does not repeat" value="no-repeat" />
                    <Picker.Item label="Daily" value="daily" />
                    <Picker.Item label="Weekly" value="weekly" />
                    <Picker.Item label="Monthly" value="monthly" />
                    <Picker.Item label="Yearly" value="yearly" />
                    <Picker.Item label="Custom" value="custom" />
                </Picker>
                <Button
                    onPress={() => { this.validateTask() && createTask(this.state) }}
                    backgroundColor={taskColor}
                    rounded
                    containerViewStyle={{ marginBottom: 10, marginTop: 15 }}
                    title='Save' />
            </View>
        )
    }
}