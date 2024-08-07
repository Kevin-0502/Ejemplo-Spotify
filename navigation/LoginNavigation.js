import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrincipalNavigation from './PrincipalNavigation';
import Login from '../screens/Login';

export default function LoginNavigation() {

    const StackLogin=createNativeStackNavigator();

return (
        <NavigationContainer>
            <StackLogin.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <StackLogin.Screen name="Login" component={Login} />
                <StackLogin.Screen name="Drawer" component={PrincipalNavigation} />
            </StackLogin.Navigator>
        </NavigationContainer>
        );
}