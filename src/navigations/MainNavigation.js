import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Login from '../screens/auth/LoginScreen';
import { ROUTES } from '../utils';

const Stack = createStackNavigator();

const headerStyles = StyleSheet.create({
  header: { backgroundColor: '#fff' },
  headerTitle: { fontWeight: 'bold' },
});

export default function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerStyle: headerStyles.header,
        headerTintColor: '#000',
        headerTitleStyle: headerStyles.headerTitle,
      }}
    >
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
  );
}