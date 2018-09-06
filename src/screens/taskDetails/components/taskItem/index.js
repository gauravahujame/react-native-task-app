import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { Text, Icon } from 'react-native-elements';

export default class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.task.completed,
        }
    }

    render() {
        const { color } = this.props;
        const { title, time } = this.props.task;
        const { checked } = this.state;

        return (
            <TouchableOpacity
                onPress={() => this.setState({ checked: !checked })}
                activeOpacity={1}
                style={{ paddingVertical: 15, flexDirection: 'row' }}>
                <Icon
                    name="checkbox-marked-circle"
                    type="material-community"
                    color={ checked ? color : '#00000020' }
                    size={28}
                    containerStyle={{ marginRight: 20 }} />
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: 'black', textDecorationLine: checked ? 'line-through' : null }}>{title}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>{time}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}