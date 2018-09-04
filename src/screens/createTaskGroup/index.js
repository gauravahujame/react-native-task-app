import React from 'react';
import { View, StatusBar, StyleSheet, TextInput, FlatList } from 'react-native';
import { Text, Icon, Button, Divider } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';


export default class CreateTaskGroupScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            tasks: [
                {
                    title: '',
                    time: null,
                },
            ]
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: gray }}>
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
                <View style={{ paddingLeft: 50, paddingTop: 50 }}>
                    <TextInput
                        height={80}
                        placeholder="List Name"
                        placeholderTextColor="#ffffff20"
                        autoFocus
                        value={this.state.title}
                        style={{ fontSize: 34, fontWeight: '600', color: 'white' }}
                        onChangeText={(input) => this.setState({ title: input })} />
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#ffffff99' }}>
                        Lets add a task to this list
                    </Text>
                </View>
                <Divider style={{ backgroundColor: '#42424220', marginVertical: 10, marginLeft: 50 }} />
                <View style={{ alignSelf: 'flex-start', paddingLeft: 50 }}>
                    <FlatList
                        data={this.state.tasks}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{ paddingVertical: 15, flexDirection: 'row' }}>
                                <Icon name="alarm-add" color='#fff' size={28} containerStyle={{ marginRight: 20 }} />
                                <View>
                                    <TextInput
                                        height={40}
                                        borderBottomWidth={1}
                                        borderBottomColor="white"
                                        style={{ fontSize: 18, fontWeight: '500', color: 'white', width: 400 }}
                                        onChangeText={(input) => this.setState({ tasks: [{ title: input }] })} />
                                    {/* <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>{item.time}</Text> */}
                                </View>
                            </View>
                        )} />
                </View>
            </View>
        );
    }
}

const gray = '#636364';

const styles = StyleSheet.create({

})