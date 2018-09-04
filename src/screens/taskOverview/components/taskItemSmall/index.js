import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { Text, Icon } from 'react-native-elements';

export default class TaskItemSmall extends React.Component {
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
                style={{ paddingVertical: 5, flexDirection: 'row' }}>
                <Icon
                    name="checkbox-marked-circle"
                    type="material-community"
                    color={ checked ? 'white' : '#00000020' }
                    size={22}
                    containerStyle={{ marginRight: 20 }} />
                <View>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: 'white' }}>{title}</Text>
                    <Text style={{ fontSize: 9, fontWeight: '400', color: 'white' }}>{time}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}