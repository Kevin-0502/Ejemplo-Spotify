import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Favorites from '../screens/Favorites';
import ForYou from '../screens/ForYou';

export default function RecomendNavigation() {

    const Tab = createMaterialTopTabNavigator();

return (
        <Tab.Navigator>
            <Tab.Screen name="ForYou" component={ForYou} />
            <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
    )
}