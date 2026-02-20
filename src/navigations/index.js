import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
//screens
import AuthNav from './AuthNav';
//utils
import routes from '../utils/routes';
import { ROUTES } from '../utils';

function MyStack() {
 return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
 );
};

export default () => {
    return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
    );
}