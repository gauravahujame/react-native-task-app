import React from 'react';
import { View, Picker, TextInput, Keyboard } from 'react-native';
import { Text, Icon, Button, Divider } from 'react-native-elements';

export default class CreateTaskActionSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: undefined,
            time: undefined,
            frequency: false,
        }
    }

    validateTask() {
        const { title, time } = this.state;
        if (title && time) return true;
        return false;
    }

    render() {
        const { title, time, frequency } = this.state;
        const { hideActionSheet, createTask, taskColor } = this.props;
        return (
            <View style={{ width: '100%', height: '100%', elevation: 0, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#42424202' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                <TextInput
                    placeholder="Remind me to"
                    autoFocus
                    value={title}
                    selectionColor={taskColor}
                    style={{ flex: 1, fontSize: 20, fontWeight: '600', color: 'black' }}
                    onChangeText={(input) => this.setState({ title: input })} />
                    <Icon name="close" onPress={() => hideActionSheet()} containerStyle={{ paddingHorizontal: 10 }} />
                </View>
                <Divider style={{ backgroundColor: '#42424210' }} />
                <Picker
                    selectedValue={time}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => this.setState({ time: itemValue })}>
                    <Picker.Item label="Tomorrow" value="tomorrow" />
                    <Picker.Item label="Next Friday" value="next-week" />
                    <Picker.Item label="Weekend" value="weekend" />
                    <Picker.Item label="Don't really care" value="never" />
                </Picker>
                <Picker
                    selectedValue={time}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => this.setState({ time: itemValue })}>
                    <Picker.Item label="Let me pick a time" value="custom" />
                </Picker>
                <Picker
                    selectedValue={frequency}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => this.setState({ frequency: itemValue })}>
                    <Picker.Item label="Put this on a loop" value="no-repeat" />
                    <Picker.Item label="Everyday" value="daily" />
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
                    title='Remind me' />
            </View>
        )
    }
}