import React from 'react';
import { View, StatusBar, StyleSheet, FlatList } from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

import CategoryTile from './components/categoryTile';
import AddTile from './components/addTile';

import { lists } from '../../data';

export default class TaskOverviewScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.setActiveColor = this.setActiveColor.bind(this);
        this.viewableThreshold = { viewAreaCoveragePercentThreshold: 50 };
        this.state = {
            firstName: 'Gaurav',
            activeColor: '#568cff',
            lists: lists,
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
        return (
            <View style={{ flex: 1, backgroundColor: this.state.activeColor }}>
                <StatusBar
                    hidden
                    barStyle="light-content"
                    backgroundColor="#568cff" />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    backgroundColor: '#00000020'
                }}>
                    <Icon name="keyboard-arrow-left" color="white" size={28} />
                    <Icon name="more-horiz" color="white" size={28} />
                </View>
                <View style={{ padding: 50 }}>
                    <Text style={{ fontSize: 34, fontWeight: '600', color: 'white' }}>Hello {this.state.firstName}</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'white' }}>
                        Nice to see you again
                    </Text>
                </View>
                <View style={{ flex: 0.7, justifyContent: 'center' }}>
                    <FlatList
                        data={this.state.lists}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        ListFooterComponent={<AddTile navigation={navigation} />}
                        viewabilityConfig={this.viewableThreshold}
                        onViewableItemsChanged={this.setActiveColor}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => <CategoryTile item={item} navigation={navigation} />} />
                </View>
                <View style={{ alignItems: 'stretch', alignSelf: 'center', position: 'absolute', bottom: 30 }}>
                    {/* <Text style={{ fontSize: 12, fontWeight: '400', color: 'white', textAlign: 'center' }}>
                        Already a member?
                    </Text> */}
                </View>
            </View>
        );
    }
}


const lightBlue = '#568cff';
const gray = '#636364';

const styles = StyleSheet.create({

})