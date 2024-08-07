import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Home from '../screens/Home';
import RecomendNavigation from "./RecomendNavigation";

export default function HomeTabNavigation() {

    const TabsHome=createMaterialBottomTabNavigator();

return (
        <TabsHome.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad'}}
        >
            <TabsHome.Screen name="Home" component={Home} />
            <TabsHome.Screen name="Recomend" component={RecomendNavigation} />
        </TabsHome.Navigator>
    )
}