import React from 'react';
import { View, StatusBar, StyleSheet, FlatList } from 'react-native';
import { Text, Icon, Avatar } from 'react-native-elements';
import { inject, observer } from 'mobx-react/native';
import _ from 'lodash';

import CategoryTile from './components/categoryTile';
import AddTile from './components/addTile';

@inject('listStore', 'appStore') @observer
class TaskOverviewScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.setActiveColor = this.setActiveColor.bind(this);
        this.viewableThreshold = { viewAreaCoveragePercentThreshold: 50 };

        this.state = {
            activeColor: props.listStore.lists.length ? props.listStore.lists[0].color : '#40404020',
        }
    }

    setActiveColor(data) {
        const item = _.get(data, 'viewableItems[0].item', { color: gray });
        if (item) {
            this.setState({ activeColor: item.color });
        }
    }

    render() {
        const { navigation } = this.props;
        const { lists } = this.props.listStore;
        const { user } = this.props.appStore;

        return (
            <View style={{ flex: 1, backgroundColor: this.state.activeColor }}>
                <StatusBar
                    hidden
                    barStyle="light-content"
                    backgroundColor={this.state.activeColor} />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    backgroundColor: '#00000020'
                }}>
                    <Icon name="keyboard-arrow-left" color="white" size={28} />
                    <Icon name="more-horiz" color="white" size={28} />
                </View>
                <View style={{ paddingHorizontal: 40, paddingVertical: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar
                        medium
                        rounded
                        source={{ uri: user.avatar }}
                        containerStyle={{ elevation: 5 }}
                        avatarStyle={{ borderWidth: 2, borderColor: 'white' }} />
                    <View style={{ width: 15 }} />
                    <View>
                        <Text style={{ fontSize: 34, fontWeight: '600', color: 'white', marginBottom: 3 }}>Hello {user.firstName}</Text>
                        <Text style={{ fontSize: 14, fontWeight: '400', color: 'white', letterSpacing: 0.5 }}>
                            Nice to see you again
                        </Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <FlatList
                        data={lists}
                        extraData={this.props.listStore.lists.toJS()}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        ListFooterComponent={<AddTile navigation={navigation} />}
                        viewabilityConfig={this.viewableThreshold}
                        onViewableItemsChanged={this.setActiveColor}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <CategoryTile item={item} navigation={navigation} />} />
                </View>
            </View>
        );
    }
}

const gray = '#636364';

const styles = StyleSheet.create({

})

export default TaskOverviewScreen;