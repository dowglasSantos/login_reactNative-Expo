import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Welcome} from '../pages/Welcome';
import {SignIn} from '../pages/SignIn';

const {Navigator, Screen} = createNativeStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName='Welcome'>
                <Screen name='Welcome' component={Welcome} options={{headerShown: false}} />
                <Screen name='SignIn' component={SignIn} options={{headerShown: false}} />
            </Navigator>
        </NavigationContainer>
    );
};