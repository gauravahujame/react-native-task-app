import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { TaskOverviewScreen, TaskDetailsScreen, CreateTaskGroupScreen } from '../screens';

export default createStackNavigator(
    {
        TaskOverview: TaskOverviewScreen,
        TaskDetail: TaskDetailsScreen,
        CreateTaskGroup: CreateTaskGroupScreen,
    },
    {
        headerMode: 'none'
    }
);
