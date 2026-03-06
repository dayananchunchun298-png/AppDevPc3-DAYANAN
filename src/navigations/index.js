import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './MainNavigation';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}